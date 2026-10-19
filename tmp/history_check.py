import sqlite3, sys, json
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
conn = sqlite3.connect(r'C:\Users\PEDO\.kiss\history.db')
cur = conn.cursor()
cur.execute("SELECT seq, event_json FROM events WHERE task_id=? ORDER BY seq", ('f419fa8865f747d2b4116fb7cdb06972',))
rows = cur.fetchall()
print('EVENT COUNT:', len(rows))
for seq, ej in rows:
    try:
        ev = json.loads(ej)
    except Exception:
        print(seq, 'RAW:', ej[:300])
        continue
    name = ev.get('name') or ev.get('tool') or list(ev.keys())
    print('--- seq', seq, '| keys:', list(ev.keys())[:10])
    if isinstance(ev.get('args'), dict) and 'file_path' in ev['args']:
        print('    file:', ev['args']['file_path'])
import sqlite3, sys, json
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
conn = sqlite3.connect(r'C:\Users\PEDO\.kiss\history.db')
cur = conn.cursor()
for seq in (1949, 1954, 2031, 2043):
    cur.execute("SELECT event_json FROM events WHERE task_id=? AND seq=?", ('f419fa8865f747d2b4116fb7cdb06972', seq))
    row = cur.fetchone()
    print('SEQ', seq, 'found:', row is not None)
    if row:
        print(json.dumps(json.loads(row[0]), ensure_ascii=False, indent=1)[:3000])
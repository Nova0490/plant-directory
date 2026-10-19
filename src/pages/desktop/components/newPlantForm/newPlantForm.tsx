import { useState, type ChangeEvent, type FormEvent } from 'react';
import styles from './newPlantForm.module.css';
import type { PlantFormState, Room } from '../../../../types/types.tsx';

const ROOMS: Room[] = ['Гостиная', 'Спальня', 'Кухня', 'Балкон', 'Ванная'];

function createInitialForm(): PlantFormState {
  return {
    name: '',
    room: 'Гостиная',
    interval: 7,
    lastWatered: Date.now(),
    note: '',
  };
}

const NewPlantForm = () => {
  const [formData, setFormData] = useState<PlantFormState>(createInitialForm);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'interval' ? Number(value.trim()) : name === 'lastWatered' ? new Date(value).getTime() : value.trim(),
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('submit', formData);
  }

  function handleReset() {
    setFormData(createInitialForm());
  }

  const lastWateredDate = formData.lastWatered
    ? new Date(formData.lastWatered).toISOString().split('T')[0]
    : '';

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">название растения*</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <p id="nameMsg" className={styles.msg}>После trim, обязательное</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="room">комната*</label>
        <select
          id="room"
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
          aria-required="true"
        >
          {ROOMS.map(room => (
            <option key={room} value={room}>{room}</option>
          ))}
        </select>
        <p id="roomMsg" className={styles.msg}>Выбери комнату</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="interval">интервал полива*</label>
        <input
          id="interval"
          name="interval"
          type="number"
          min={0}
          max={90}
          value={formData.interval}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <p id="intervalMsg" className={styles.msg}>Целое число от 0 до 90</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="lastWatered">последний полив*</label>
        <input
          id="lastWatered"
          name="lastWatered"
          type="date"
          value={lastWateredDate}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <p id="lastWateredMsg" className={styles.msg}>Не позднее сегодня</p>
      </div>

      <div className={styles.field}>
        <label htmlFor="note">заметка</label>
        <textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={3}
          placeholder="Короткая заметка об уходе..." 
          maxLength={240}
        />
        <div className={styles.noteFooter}>
          <p id="noteMsg" className={styles.msg}>Необязательно</p>
          <p>{formData.note.length}/240</p>
        </div>
      </div>
      <div className={styles.Buttons}>
        <button type="submit" className={styles.submitButton}>
        Добавить растение
      </button>
      <button type="reset" onClick={handleReset} className={styles.resetButton}>
        Очистить
      </button>
      </div>
    </form>

  );
};

export default NewPlantForm;
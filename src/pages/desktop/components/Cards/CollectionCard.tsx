import styles from './CollectionCard.module.css';
import type { Plant } from '../../../../types/types.ts';
import water from '../../../../img/Hero Care Action Icon.webp'
import geo from '../../../../img/geo.webp'

const CollectionCard = (props: Plant) => {
  return (
    <div className={styles.card}>
            <header className={styles.headerCard}>
                <div className={styles.status}>
                  <p>йцуккеекнкевфы</p></div>
            </header>

<h1 className={styles.name}>{props.name}</h1>
    <div className={styles.locate}>
    <img src={geo} alt="geo.img" className={styles.geoLogo}/>
        <h3 className={styles.room}>{props.room}</h3>
    </div>

    <div className={styles.metaData}>
      <div className={styles.interval}>Каждые {props.interval} дня </div>
      <div className={styles.lastWatered}>Последний полив:{props.lastWatered}</div>
      </div>
    <div className={styles.note}>{props.note}</div>
    <div className={styles.actions}>
      <button className={styles.waterButton}><img src={water} alt="care.img" className={styles.careLogo}/>Полито сегодня</button>
       <button className={styles.editButton}>Редактировать</button>
        </div>
        <p className={styles.delete}>Удалить</p>


    </div>
  )
}

export default CollectionCard
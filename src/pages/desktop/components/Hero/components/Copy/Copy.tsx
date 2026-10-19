import styles from './Copy.module.css'
import water from '../../../../../../img/Hero Care Action Icon.webp'
const Copy = () => {
  return (
    <div className={styles.copy}>
        <p className={styles.data}>Коллекция № 01 27 августа</p>
        <h1 className={styles.title}>Сегодня растения <br/> говорят первыми.</h1>
        <h3 className={styles.bodyText}>Три экземпляра ждут воды. Остальные - в своем ритме.</h3>
        <div className={styles.metricAndAction}>
            <div className={styles.count}>
                <h1 className={styles.countValue}>07</h1>
                <h3 className={styles.countLabel}>растений в комнате</h3>
            </div>
            <button className={styles.careActionButton}><img src={water} alt="care.img" className={styles.careLogo}/> Перейти к уходу</button>
        </div>

    </div>
  )
}

export default Copy
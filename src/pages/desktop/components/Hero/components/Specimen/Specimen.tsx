import styles from './Specimen.module.css'
import example_plant from '../../../../../../img/Hero Plant Image.webp'
const Specimen = () => {
  return (
    <div className={styles.specimen}>
        <img src={example_plant} alt="Plant" className={styles.plant}/>
        <div className={styles.plantDescription}>
            <p className={styles.collectioText}>COLLECTIO DOMESTICA</p>
            <p className={styles.specimenNumberText}>SPECIMEN 07</p>
        </div>
    </div>
  )
}

export default Specimen
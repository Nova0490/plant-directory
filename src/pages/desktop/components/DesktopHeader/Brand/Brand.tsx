import styles from './Brand.module.css';
import logo from '../../../../../img/brand-icon.png'
const Brand = () => {
  return (
    <div className={styles.brand}>
        <img src={logo} className={styles.logo} alt="Логотип" />
        <div className={styles.logoText}>
            <h3>Домашний гербарий</h3>
            <p>Личный каталог ухода</p>
        </div>
    </div>
  )
}

export default Brand
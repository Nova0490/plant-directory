import styles from './SaveNote.module.css';
import saveLogo from '../../../../../img/Browser Save Icon.png'
const SaveNote = () => {
  return (
    <div className={styles.saveNote}>
        <img src={saveLogo} alt="Логотип" className={styles.logo} />
        <p className={styles.text}>Сохранено в этом браузере</p>
    </div>
  )
}

export default SaveNote
import styles from './DesktopFooter.module.css';

const DesktopFooter = () => {
  return (
    <footer className={styles.desktopFooter}>
      <p className={styles.footerLocal}>Данные живут только в этом браузере</p>
      <p className={styles.footerUpdate}>Последнее изменение: {'сегодня, 09:42'}</p>
    </footer>
  );
};

export default DesktopFooter;

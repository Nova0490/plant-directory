import styles from './TodayCareSection.module.css';
import care from '../../../../img/Hero Care Action Icon.webp'
const TodayCareSection = () => {
  return (
    <section className={styles.todayCareSection}>
      <div className={styles.headingRow}>
        <div className={styles.headingWord}>
          <p className={styles.data}>Care/ {'27 Aug'}</p>
          <h3>Уход сегодня</h3>
          <p>Просроченные показываются первыми</p>
        </div>
        <div className={styles.counter}>
          <img src={care} alt="." />
          <p className={styles.counterLabel}>{'3'} растения </p>
        </div>
        <div className={styles.cards}>карточки</div>
      </div>
    </section>
  );
};

export default TodayCareSection;

import styles from './CollectionSection.module.css';
import CollectionCard from '../Cards/CollectionCard.tsx'
const CollectionSection = () => {
  return (
    <section className={styles.collectionSection}>
      <div className={styles.headingRow}>
        <div className={styles.heading}>
          <div className={styles.collectionHeading}>
          <p>ALL SPECIMENS / {'7'}</p>
          <h1>Вся коллекция</h1>
          </div>
          <p className={styles.orderNote}>Ближайший уход - первым</p>
        </div>
      </div>
      <div className={styles.collectionGridCards}>
 <CollectionCard
      name="Калатея Орбифобия"
      room="Гостиная"
      interval={3}
      lastWatered={1728201600000}
      note="Поливать тёплой водой"
    />
     <CollectionCard
      name="Калатея Орбифобия"
      room="Гостиная"
      interval={3}
      lastWatered={1728201600000}
      note="Поливать тёплой водой"
    />
     <CollectionCard
      name="Калатея Орбифобия"
      room="Гостиная"
      interval={3}
      lastWatered={1728201600000}
      note="Поливать тёплой водой"
    />
     <CollectionCard
      name="Калатея Орбифобия"
      room="Гостиная"
      interval={3}
      lastWatered={1728201600000}
      note="Поливать тёплой водой"
    />
     <CollectionCard
      name="Монстера"
      room="Гостиная"
      interval={3}
      lastWatered={1728201600000}
      note="Поливать тёплой водой"
    />
      </div>
    </section>
  );
};

export default CollectionSection;

import styles from './DesktopHeader.module.css';
import Brand from './Brand/Brand';
import AddPlantButton from './AddPlantButton/AddPlantButton';
import SaveNote from './SaveNote/SaveNote';
const DesktopHeader = () => {
  return (
    <header className={styles.desktopHeader}>
      <Brand/>
      <div className={styles.desktopActions}>
        <SaveNote/>
        <AddPlantButton/>
      </div>
    </header>
  );
};

export default DesktopHeader;

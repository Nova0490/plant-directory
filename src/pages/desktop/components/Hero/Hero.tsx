import styles from './Hero.module.css';
import Copy from './components/Copy/Copy';
import Specimen from './components/Specimen/Specimen';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <Copy/>
      <Specimen/>
    </div>
  );
};

export default Hero;

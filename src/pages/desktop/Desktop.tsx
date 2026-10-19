import styles from './Desktop.module.css';
import DesktopHeader from './components/DesktopHeader/DesktopHeader';
import Hero from './components/Hero/Hero';
import TodayCareSection from './components/TodayCareSection/TodayCareSection';
import CollectionSection from './components/CollectionSection/CollectionSection';
import DesktopFooter from './components/DesktopFooter/DesktopFooter';

const Desktop = () => {
  return (
    <section className={styles.desktopContent}>
      <DesktopHeader />
      <main className={styles.main}>
        <Hero />
        <TodayCareSection />
        <CollectionSection />
      </main>
      <DesktopFooter />
    </section>
  );
};

export default Desktop;
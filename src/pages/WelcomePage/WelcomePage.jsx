import Container from '../../components/Container/Container';
import WaterСonsumptionTracker from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from '../../components/WhyDrinkWater/WhyDrinkWater';

import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <main>
      <section className={styles.section}>
        <Container>
          <div className={styles.wrapper}>
            <WaterСonsumptionTracker />
            <WhyDrinkWater />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default WelcomePage;

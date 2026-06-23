import WaterСonsumptionTracker from '../../components/WaterСonsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from '../../components/WhyDrinkWater/WhyDrinkWater';

import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <main>
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
    </main>
  );
};

export default WelcomePage;

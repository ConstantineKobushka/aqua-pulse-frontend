import { Link } from 'react-router-dom';

import styles from './WaterСonsumptionTracker.module.css';

const WaterСonsumptionTracker = () => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>Water consumption tracker</h1>
      <h2 className={styles.subtitle}>Record daily water intake and track</h2>
      <h3 className={styles.benefits}>Tracker Benefits</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <svg className={styles.svg} width="32" height="32">
            <use href="/icons/icons-sprite.svg#calendar"></use>
          </svg>
          <span className={styles.text}>Habit drive</span>
        </li>
        <li className={styles.item}>
          <svg className={styles.svg} width="32" height="32">
            <use href="/icons/icons-sprite.svg#chart-bar"></use>
          </svg>
          <span className={styles.text}>View statistics</span>
        </li>
        <li className={styles.item}>
          <svg className={styles.svg} width="32" height="32">
            <use href="/icons/icons-sprite.svg#vrench-screwdriver"></use>
          </svg>
          <span className={styles.text}>Personal rate setting</span>
        </li>
      </ul>
      <Link className={styles.link} to="/signup">
        Try tracker
      </Link>
    </div>
  );
};

export default WaterСonsumptionTracker;

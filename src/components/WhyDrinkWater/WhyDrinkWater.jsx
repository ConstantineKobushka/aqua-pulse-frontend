import styles from './WhyDrinkWater.module.css';

const WhyDrinkWater = () => {
  return (
    <div className={styles.inner}>
      <h3 className={styles.reason}>Why drink water</h3>
      <ul className={styles.list}>
        <li className={styles.item}>Supply of nutrients to all organs</li>
        <li className={styles.item}>Providing oxygen to the lungs</li>
        <li className={styles.item}>Maintaining the work of the heart</li>
        <li className={styles.item}>Release of processed substances</li>
        <li className={styles.item}>
          Ensuring the stability of the internal environment
        </li>
        <li className={styles.item}>
          Maintaining within the normal temperature
        </li>
        <li className={styles.item}>
          Maintaining an immune system capable of resisting disease
        </li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;

import styles from './UserLogo.module.css';

const UserLogo = () => {
  return (
    <button className={styles.btn} type="button">
      <span className={styles.name}>David</span>
      <div className={styles.img}></div>
      {/* <img className={styles.img} src="" alt="Avatar" width="28" height="28" loading='lazy'/> */}
      <svg className={styles.svg} width="11" height="7">
        <use href="/icons/icons-sprite.svg#shevron-double"></use>
      </svg>
    </button>
  );
};

export default UserLogo;

import { Link } from 'react-router-dom';

import styles from './UserAuth.module.css';

const UserAuth = () => {
  return (
    <div className={styles.inner}>
      <Link className={styles.link} to="/signin">
        Sign in
      </Link>
      <svg className={styles.svg} width="28" height="28">
        <use href="/icons/icons-sprite.svg#user"></use>
      </svg>
    </div>
  );
};

export default UserAuth;

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <UserAuth />
          {/* <UserLogo /> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;

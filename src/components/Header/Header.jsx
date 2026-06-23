import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';

import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <Logo />
      <UserAuth />
      <UserLogo />
    </>
  );
};

export default Header;

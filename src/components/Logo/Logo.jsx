import styles from './Logo.module.css';

import logo from '../../assets/icons/logo.svg';

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="Logo" width="102" height="48" loading="lazy" />
    </a>
  );
};

export default Logo;

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import style from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;

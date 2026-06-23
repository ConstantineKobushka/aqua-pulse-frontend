import { lazy, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

import SharedLayout from './components/SharedLayout/SharedLayout';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/singin" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

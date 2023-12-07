import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MobileSideBar } from 'components/MobileSideBar/MobileSideBar';
import { useState } from 'react';

import styles from './LayOut.module.scss';
import { Header } from 'components/Header/Header';

export const LayOut = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MobileSideBar menuToggle={menuToggle} isMenuOpen={isMenuOpen} />
      <Header menuToggle={menuToggle} />
      <main className="container">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { MobileSideBar } from 'components/MobileSideBar/MobileSideBar';
import { useState } from 'react';

import styles from './LayOut.module.scss';
import { Header } from 'components/Header/Header';

export const LayOut = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {windowWidth <= 1023 && <Header menuToggle={menuToggle} />}

      <main>
        <div className="container">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </div>
      </main>

      {windowWidth <= 1023 && (
        <MobileSideBar menuToggle={menuToggle} isMenuOpen={isMenuOpen} />
      )}
    </>
  );
};

import { NavigationLink } from '../NavigationLink/NavigationLink';
import sprite from 'SVG/symbol-defs.svg';
import styles from './MobileNavigation.module.scss';

export const MobileNavigation = ({ menuToggle }) => {
  return (
    <nav className={styles.mobileNav}>
      <NavigationLink
        svg={`${sprite}#icon-key-square`}
        link={'/'}
        title={'Dashboard'}
        menuToggle={menuToggle}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-d-square`}
        link={'/product'}
        title={'Product'}
        menuToggle={menuToggle}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-user-square`}
        link={'/customers'}
        title={'Customers'}
        menuToggle={menuToggle}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-wallet-money`}
        link={'/income'}
        title={'Income'}
        menuToggle={menuToggle}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-discount-shape`}
        link={'/promote'}
        title={'Promote'}
        menuToggle={menuToggle}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-message-question`}
        link={'/help'}
        title={'Help'}
        menuToggle={menuToggle}
      ></NavigationLink>
    </nav>
  );
};

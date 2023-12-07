import { NavigationLink } from '../NavigationLink/NavigationLink';
import sprite from 'SVG/symbol-defs.svg';
import styles from './MobileNavigation.module.scss';
import scss from '../NavigationLink/NavigationLink.module.scss';

export const MobileNavigation = () => {
  return (
    <nav className={styles.mobileNav}>
      <NavigationLink
        svg={`${sprite}#icon-key-square`}
        link={'/'}
        title={'Dashboard'}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-d-square`}
        link={'/product'}
        title={'Product'}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-user-square`}
        link={'/customers'}
        title={'Customers'}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-wallet-money`}
        link={'/income'}
        title={'Income'}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-discount-shape`}
        link={'/promote'}
        title={'Promote'}
      ></NavigationLink>
      <NavigationLink
        svg={`${sprite}#icon-message-question`}
        link={'/help'}
        title={'Help'}
      ></NavigationLink>
    </nav>
  );
};

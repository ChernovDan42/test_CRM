import styles from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';
import sprite from 'SVG/symbol-defs.svg';
import clsx from 'clsx';

export const NavigationLink = ({ title, link, svg }) => {
  const IsDashboardPage = link === '/';

  return (
    <NavLink className={styles.navLink} to={link}>
      <div className={styles.flex}>
        <svg
          className={clsx('navIcon', styles.navIconS)}
          width="24"
          height="24"
        >
          <use xlinkHref={svg}></use>
        </svg>
        {title}
      </div>

      {!IsDashboardPage && (
        <svg className="navIconRight" width="16" height="16">
          <use xlinkHref={`${sprite}#icon-right`}></use>
        </svg>
      )}
    </NavLink>
  );
};

import clsx from 'clsx';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Header.module.scss';

export const Header = ({ menuToggle }) => {
  return (
    <header className={clsx(styles.header)}>
      <button className={styles.closeBtn} type="button" onClick={menuToggle}>
        <IconContext.Provider value={{ size: '30px' }}>
          <div>
            <GiHamburgerMenu />
          </div>
        </IconContext.Provider>
      </button>
    </header>
  );
};

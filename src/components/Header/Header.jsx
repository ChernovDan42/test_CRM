import clsx from 'clsx';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useUserName } from 'components/context/nameContext';
import styles from './Header.module.scss';

export const Header = ({ menuToggle }) => {
  const { userName } = useUserName();
  return (
    <header className={clsx(styles.header)}>
      <div className={styles.container}>
        <button className={styles.closeBtn} type="button" onClick={menuToggle}>
          <IconContext.Provider value={{ size: '30px' }}>
            <div>
              <GiHamburgerMenu />
            </div>
          </IconContext.Provider>
        </button>
        <h1 className={styles.titleGreeting}>Hello {userName} 👋🏼</h1>
      </div>
    </header>
  );
};

import { LogoBlock } from './LogoBlock/Logoblock';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import styles from './MobileSideBar.module.scss';
import clsx from 'clsx';
import { UserBlock } from './UserBlock/UserBlock';
import { CloseBtn } from './CloseBtn/CloseBtn';

export const MobileSideBar = ({ menuToggle, isMenuOpen }) => {
  return (
    <div
      className={clsx(styles.menuContainer, {
        [styles.isOpen]: isMenuOpen,
      })}
    >
      <LogoBlock />
      <CloseBtn menuToggle={menuToggle} />
      <MobileNavigation />
      <UserBlock />
    </div>
  );
};

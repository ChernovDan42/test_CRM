import { IconContext } from 'react-icons';
import { IoCloseSharp } from 'react-icons/io5';
import styles from './CloseBtn.module.scss';

export const CloseBtn = ({ menuToggle }) => {
  return (
    <button className={styles.closeBtn} type="button" onClick={menuToggle}>
      <IconContext.Provider
        value={{ size: '30px', className: 'closeMobileBtn' }}
      >
        <div>
          <IoCloseSharp />
        </div>
      </IconContext.Provider>
    </button>
  );
};

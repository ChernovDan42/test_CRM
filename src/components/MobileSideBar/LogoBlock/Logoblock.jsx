import styles from './LogoBlock.module.scss';
import sprite from 'SVG/symbol-defs.svg';

export const LogoBlock = () => {
  return (
    <div className={styles.containerCenter}>
      <div className={styles.logoFlexContainer}>
        <svg className={styles.logo} width="37" height="37">
          <use xlinkHref={`${sprite}#icon-setting`}></use>
        </svg>
        <div className={styles.titleFlexContainer}>
          <h1 className={styles.logoText}>Dashboard</h1>
          <p className={styles.version}>v.01</p>
        </div>
      </div>
    </div>
  );
};

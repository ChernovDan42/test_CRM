import sprite from 'SVG/symbol-defs.svg';
import styles from './FilterInput.module.scss';

export const FilterInput = () => {
  return (
    <div className={styles.inputHolder}>
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        placeholder="Search"
      />
      <svg className={styles.searchIcon} width="24" height="24">
        <use xlinkHref={`${sprite}#icon-search`}></use>
      </svg>
    </div>
  );
};

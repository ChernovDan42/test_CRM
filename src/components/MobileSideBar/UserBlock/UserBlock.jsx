import userPhoto from 'img/IMG_0759.jpg';
import styles from './UserBlock.module.scss';
export const UserBlock = () => {
  return (
    <div className={styles.userBlockFlex}>
      <img className={styles.userImage} src={userPhoto} alt="user" />
      <div>
        <p className={styles.userName}>Daniil</p>
        <p className={styles.userRole}>Developer</p>
      </div>
    </div>
  );
};

import userPhoto from 'img/IMG_0759.jpg';
import styles from './UserBlock.module.scss';
import { useUserName } from 'components/context/nameContext';

export const UserBlock = () => {
  const { userName, role } = useUserName();

  return (
    <div className={styles.userBlockFlex}>
      <img className={styles.userImage} src={userPhoto} alt="user" />
      <div>
        <p className={styles.userName}>{userName}</p>
        <p className={styles.userRole}>{role}</p>
      </div>
    </div>
  );
};

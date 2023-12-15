import './StatusButton.scss';
import clsx from 'clsx';

export const StatusButton = ({ status }) => {
  const isActive = status === 'true';
  return (
    <button
      className={clsx('status-btn', {
        'active-btn': isActive,
        'disActive-btn': !isActive,
      })}
    >
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
};

import PropTypes from 'prop-types';
import style from './FriendListItem.module.scss';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  const backgroundColor = isOnline ? 'green' : 'red';
  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={{ backgroundColor: backgroundColor }}
      ></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

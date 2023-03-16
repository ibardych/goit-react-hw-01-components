import PropTypes from 'prop-types';
import style from './Profile.module.scss';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <div className={style['avatar-wrapper']}>
          <img src={avatar} alt="User avatar" className={style.avatar} />
        </div>
        <h2 className={style.name}>{username}</h2>
        <a className={style.tag} href={`/${tag}`}>
          @{tag}
        </a>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;

import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={style.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
};
FriendList.defaultProps = {
  friends: [],
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;

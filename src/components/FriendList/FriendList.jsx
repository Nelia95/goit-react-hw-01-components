import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
// import Style from './friendList.css';
import './friendList.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className="friendList">
        {friends.map(item => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
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
  friends: PropTypes.array.isRequired,
};
export default FriendList;

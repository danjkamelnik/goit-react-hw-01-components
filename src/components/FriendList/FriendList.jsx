import PropTypes from 'prop-types';
import { FriendCard, FriendItem, Status, Avatar, Name} from './FriendList.styled';

const FriendList = ({friends}) => {
    return (
        <FriendCard>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendItem key={id}>
                <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
                <Avatar src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
                </FriendItem>
            ))}
        </FriendCard>
    );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
      }),
    ),
  }

//   
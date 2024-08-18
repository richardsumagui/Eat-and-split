import Friend from "./Friend";

const FriendList = ({ friends, onSelect, selected }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};
export default FriendList;

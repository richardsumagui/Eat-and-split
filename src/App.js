import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelectedFriend] = useState(null);
  const handleShowAdd = () => {
    setShowAdd((show) => !show);
  };
  const handleSetFriend = (x) => {
    setFriends((item) => [...item, x]);
    setShowAdd(false);
  };
  const handleSelectedFriend = (friend) => {
    setSelectedFriend((cur)=> cur?.id === friend.id ? null : friend);
    setShowAdd(false);
  };
  const onSplitBill=(balance)=>{
    setFriends(friends.map((friend)=> friend.id === selected.id ? {...friend, balance: friend.balance + balance} : friend))
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selected={selected}
          onSelect={handleSelectedFriend}
        />
        {showAdd && <FormAddFriend onAddFriend={handleSetFriend} />}
        <Button onClick={handleShowAdd}>
          {showAdd ? "Close" : "Add friend"}
        </Button>
      </div>
      {selected !== null ? <FormSplitBill friend={selected} onSplitBill={onSplitBill} /> : ""}
    </div>
  );
};
export default App;

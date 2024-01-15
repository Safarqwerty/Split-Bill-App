import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: '118836',
    name: 'Budi',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: '933372',
    name: 'Tini',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: -7,
  },
  {
    id: '499476',
    name: 'Pajo',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: -7,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handlerShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend)
  }

  function handlerAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}/>
        {showAddFriend && <FormAddFriend onAddFriend={handlerAddFriend}/>}
        <button className="button" onClick={handlerShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambahkan Teman"}
        </button>
      </div>
      <FormSplitBill />
    </div>
  )
}
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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handlerShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend)
    setSelectedFriend(null)
  }

  function handlerAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) => 
      selected?.id === friend.id ? null : friend
    )
    setShowAddFriend(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelected={handleSelectedFriend} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handlerAddFriend} />}
        <button className="button" onClick={handlerShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambahkan Teman"}
        </button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  )
}
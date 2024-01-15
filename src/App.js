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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={initialFriends}/>
        <FormAddFriend />
        <button className="button">Tambahkan Teman</button>
      </div>
      <FormSplitBill />
    </div>
  )
}
// Mengimport fungsi useState dari React untuk mengelola state komponen
import { useState } from "react";

// Mengimport komponen-komponen yang akan digunakan
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

// Inisialisasi data awal
const initialFriends = [
  {
    id: 118836,
    name: "Upin",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Ipin",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "Meimei",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// Komponen utama yang akan diexport
export default function App() {
  // State untuk menyimpan daftar teman
  const [friends, setFriends] = useState(initialFriends);
  
  // State untuk mengontrol tampilan form tambah teman
  const [showAddFriend, setShowAddFriend] = useState(false);

  // State untuk menyimpan teman yang dipilih
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Fungsi untuk menampilkan atau menyembunyikan form tambah teman
  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }

  // Fungsi untuk menambahkan teman baru ke dalam daftar
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  // Fungsi untuk menangani pemilihan teman
  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  // Fungsi untuk menangani pembagian tagihan
  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/* Komponen untuk menampilkan daftar teman */}
        <FriendList
          friends={friends}
          onSelected={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {/* Menampilkan form tambah teman jika showAddFriend true */}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        {/* Tombol untuk menampilkan/menyembunyikan form tambah teman */}
        <button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>
      {/* Menampilkan form pembagian tagihan jika teman dipilih */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

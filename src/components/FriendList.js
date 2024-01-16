// Mengimport komponen Friend untuk digunakan dalam FriendList
import Friend from "./Friend";

// Deklarasi komponen FriendList sebagai functional component
export default function FriendList({ friends, onSelected, selectedFriend }) {
    // Render ul (unordered list) yang berisi daftar teman-teman
    return (
        <ul>
            {/* Menggunakan metode map untuk membuat elemen Friend untuk setiap teman */}
            {friends.map((friend, index) => (
                // Memanggil komponen Friend dan menyediakan properti yang diperlukan
                <Friend
                    friend={friend}
                    key={index}  // Key digunakan oleh React untuk memperbaiki performa dan identifikasi elemen
                    onSelected={onSelected}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}

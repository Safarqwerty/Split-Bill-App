// Mengimport fungsi useState dari React untuk mengelola state komponen
import { useState } from "react";

// Deklarasi komponen FormAddFriend sebagai functional component
export default function FormAddFriend({ onAddFriend }) {
    // State untuk menyimpan nilai nama teman
    const [name, setName] = useState("");
    
    // State untuk menyimpan URL gambar teman (default: avatar random)
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    // Fungsi untuk menangani pengiriman formulir
    function handleSubmit(e) {
        e.preventDefault();

        // Memastikan kedua input (name dan image) telah diisi sebelum melanjutkan
        if (!name || !image) return;

        // Membuat ID unik menggunakan library crypto (dalam kasus ini menggunakan randomUUID)
        const id = crypto.randomUUID();
        
        // Membuat objek teman baru dengan nilai dari formulir
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`, // Menambahkan ID ke URL gambar untuk memastikan keunikan
            balance: 0,
        };

        // Memanggil fungsi onAddFriend dengan teman baru sebagai argumen
        onAddFriend(newFriend);

        // Mengosongkan nilai input setelah menambahkan teman baru
        setName("");
        setImage("");
    }

    // Render formulir untuk menambahkan teman
    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            {/* Input untuk nama teman */}
            <label htmlFor="">🙎🏼Nama</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* Input untuk URL gambar teman */}
            <label htmlFor="">📸Gambar</label>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            {/* Tombol untuk mengirim formulir */}
            <button className="button">Tambah</button>
        </form>
    );
}

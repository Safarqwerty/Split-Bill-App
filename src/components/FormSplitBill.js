// Mengimport fungsi useState dari React untuk mengelola state komponen
import { useState } from "react";

// Deklarasi komponen FormSplitBill sebagai functional component
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
    // State untuk menyimpan nilai jumlah total tagihan
    const [amount, setAmount] = useState("");
    
    // State untuk menyimpan nilai tagihan yang harus dibayar oleh pengguna
    const [myBill, setMyBill] = useState("");
    
    // Menghitung tagihan teman berdasarkan jumlah total tagihan dan tagihan pengguna
    const friendBill = amount ? amount - myBill : "";
    
    // State untuk menyimpan informasi siapa yang membayar tagihan
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    // Fungsi untuk menangani pengiriman formulir
    function handleSubmit(e) {
        e.preventDefault();
        // Memastikan kedua input (amount dan myBill) telah diisi sebelum melanjutkan
        if (!amount || !myBill) return;
        // Memanggil fungsi onSplitBill dengan nilai yang sesuai tergantung siapa yang membayar
        onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
    }

    // Render formulir untuk pembagian tagihan
    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Patungan Bareng si {selectedFriend.name}</h2>

            {/* Input untuk total tagihan */}
            <label htmlFor="">💵Total Tagihan</label>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            {/* Input untuk tagihan pengguna */}
            <label htmlFor="">🙋🏼‍♂️Tagihan Kamu</label>
            <input
                type="text"
                value={myBill}
                onChange={(e) => setMyBill(e.target.value)}
            />

            {/* Input untuk tagihan teman, ditampilkan sebagai nilai yang dihitung */}
            <label htmlFor="">🙋🏼Tagihan {selectedFriend.name}</label>
            <input type="text" value={friendBill} disabled />

            {/* Dropdown untuk memilih siapa yang membayar */}
            <label htmlFor="">🤑Ditalangin sama</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">Kamu</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            {/* Tombol untuk mengirim formulir */}
            <button className="button">Tambah</button>
        </form>
    );
}

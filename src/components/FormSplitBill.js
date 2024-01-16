import { useState } from "react"

export default function FormSplitBill ({ selectedFriend }) {
    const [amount, setAmount] = useState("")
    const [myBill, setMyBill] = useState("")
    const friendBill = amount ? amount - myBill : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    return (
        <form action="" className="form-split-bill">
            <h2>Patungan dengan {selectedFriend.name}</h2>

            <label htmlFor="">Total Tagihan</label>
            <input 
                type="text"
                value={amount} 
                onChang={(e) => setAmount(e.target.value)}/>
            <label htmlFor="">Total Anda</label>
            <input type="text" value={myBill} onChang={(e) => setMyBill(e.target.value)}/>
            <label htmlFor="">Tagihan {selectedFriend.name}</label>
            <input type="text" value={friendBill} disabled/>
            <label htmlFor="">Dibayar Oleh</label>
            <select value={whoIsPaying} onChang={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">Saya</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <button className="button">Tambah</button>
        </form>
    )
}
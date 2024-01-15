import { useState } from "react";

export default function FormAddFriend( onAddFriend ) {
    const [name, setName] = useState("");
    const [foto, setFoto] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !foto) return

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            foto: `${foto}?=${id}`,
            balance: 0
        }

        onAddFriend(newFriend)
        setName("")
        setFoto("")
    }

    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="">Nama</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="">Foto</label>

            <input 
                type="text" 
                value={foto} 
                onChange={(e) => setFoto(e.target.value)} />
            <button className="button">Tambah Teman</button>
        </form>
    )
}
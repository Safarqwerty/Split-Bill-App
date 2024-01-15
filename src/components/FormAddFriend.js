import { useState } from "react";

export default function FormAddFriend( onAddFriend ) {
    const [name, setName] = useState("");
    const [foto, setFoto] = useState("https://i.pravatar.cc/48");

    return (
        <form action="" className="form-add-friend">
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
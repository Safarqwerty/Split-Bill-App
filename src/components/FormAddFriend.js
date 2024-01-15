import { useState } from "react";

export default function FormAddFriend( {onAddFriend} ) {
    const [name, setName] = useState("");
    const [image, setimage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !image) return

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0
        }

        onAddFriend(newFriend)
        setName("")
        setimage("")
    }

    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="">Nama</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="">image</label>

            <input 
                type="text" 
                value={image} 
                onChange={(e) => setimage(e.target.value)} />
            <button className="button">Tambah Teman</button>
        </form>
    )
}
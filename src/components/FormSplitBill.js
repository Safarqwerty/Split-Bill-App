export default function FormSplitBill () {
    return (
        <form action="" className="form-split-bill">
            <h2>Patungan dengan </h2>

            <label htmlFor="">Total Tagihan</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Total Anda</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Tagihan</label>
            <input type="text" name="" id="" disabled/>
            <label htmlFor="">Dibayar Oleh</label>
            <select name="" id="">
                <option value="user">Saya</option>
                <option value="friend">teman</option>
            </select>
            <button className="button">Tambah</button>
        </form>
    )
}
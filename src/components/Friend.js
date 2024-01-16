// Deklarasi komponen Friend sebagai functional component
export default function Friend({ friend, onSelected, selectedFriend }) {
    // Menentukan apakah teman saat ini dipilih
    const isSelected = selectedFriend?.id === friend.id;

    // Render elemen list item (li) untuk setiap teman
    return (
        <li className={isSelected ? "selected" : ""}>
            {/* Menampilkan gambar teman */}
            <img src={friend.image} alt={friend.name} />
            
            {/* Menampilkan nama teman */}
            <h3>{friend.name}</h3>
            
            {/* Menampilkan pesan hutang jika balance teman kurang dari 0 */}
            {friend.balance < 0 && (
                <p className="red">
                    {friend.name} berhutang {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0, // Mengatur jumlah digit desimal minimum menjadi 0
                        maximumFractionDigits: 2  // Mengatur jumlah digit desimal maksimum menjadi 2
                    }).format(Math.abs(friend.balance))}
                </p>
            )}

            {/* Menampilkan pesan berhutang jika balance teman lebih dari 0 */}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} berhutang {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2
                    }).format(Math.abs(friend.balance))}
                </p>
            )}
            
            {/* Menampilkan pesan jika tidak ada hutang */}
            {friend.balance === 0 && <p>Tidak ada hutang</p>}
            
            {/* Tombol untuk memilih atau menutup pemilihan teman */}
            <button className="button" onClick={() => onSelected(friend)}>
                {isSelected ? "Tutup" : "Pilih"}
            </button>
        </li>
    );
}

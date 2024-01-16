export default function Friend({ friend, onSelected, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    Utang Kamu: Rp{Math.abs(friend.balance)} ke {friend.name}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} Utang ke Kamu: Rp{Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance === 0 && (
                <p>
                    Kamu dengan {friend.name} tidak punya utang
                </p>
            )}
            <button className="button" onClick={() => onSelected(friend)}>
                {isSelected ? "Tutup" : "Pilih"}
            </button>
        </li>
    )
}
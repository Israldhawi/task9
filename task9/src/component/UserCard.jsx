function UserCard(prps) {
    return (
        <div className="card">
            <h3>{prps.name}</h3>
            <p>Age: {prps.age}</p>
            <p>Country: {prps.country}</p>
            <p>Job Title: {prps.job}</p>
        </div>
    );
}

export default UserCard;
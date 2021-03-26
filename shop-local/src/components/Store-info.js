import "../App.css"

const StoreInfo = ({ name, address, description, openTime, closeTime, phoneNumber, instagram, facebook }) => {
    return (
        <div className='StoreInfo'>
            <h2>{name}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
            <p>{openTime}-{closeTime}</p>
            <p>Phone Number:{phoneNumber}</p>
            <a href={instagram}>Instagram</a>
            <a href={facebook}>Facebook</a>
        </div>
    )
}

export default StoreInfo;
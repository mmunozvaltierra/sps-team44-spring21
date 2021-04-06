import "../App.css"
import React, { useState, useEffect } from 'react'


// const StoreInfo = ({ name, address, description, openTime, closeTime, phoneNumber, instagram, facebook }) => {
//     if (!name) return <div />;
//     return (
//         <div className='store-container'>
//             <h2 className='store-name'>{name}</h2>
//             <h3 className='store-info'>{address}</h3>
//             <p className='store-info'>{description}</p>
//             <p className='store-info'>{openTime}-{closeTime}</p>
//             <p className='store-info'>Phone Number:{phoneNumber}</p>
//             <a className='store-info' href={instagram}>Instagram</a>
//             <a className='store-info' href={facebook}>Facebook</a>
//         </div>
//     )
// }

function StoreInfo({ match }) {

    console.log(match)

    return (
        <h1>SSSS</h1>
    )
}

export default StoreInfo;


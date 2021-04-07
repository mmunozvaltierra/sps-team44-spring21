import React from 'react'
import { storeData } from "../data";
import { Link } from 'react-router-dom'

function Stores() {
    return (

        <div>
            <p>af</p>
            {storeData.map(store => (
                // <h1>{store.storeName}</h1>
                <h1 key={store.storeid}>
                    <Link to={`/stores/${store.storeid}`}>{store.storeName}</Link>
                </h1>
            ))}
        </div>

    );
}

export default Stores;
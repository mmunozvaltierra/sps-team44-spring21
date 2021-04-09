import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Stores() {

    const [context, setContext] = useState({ 'store': {}, 'stores': [] });


    const fetchStores = async () => {
        const data = await fetch(`list-stores`, { mode: 'no-cors' })
        const stores = await data.json();
        console.log(stores);
        setContext({ 'stores': stores })
    };

    useEffect(() => {
        fetchStores();

    }, []);


    return (
        <div className='store-list'>
            <h2>Stores:</h2>
            {context['stores'].map(store => (
                <h1 key={store.storeId}>
                    <Link className='nav-style' to={`/stores/${store.storeId}`}>{store.name}</Link>
                </h1>
            ))}
        </div>
    );
}
export default Stores;
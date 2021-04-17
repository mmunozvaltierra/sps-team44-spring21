import "../App.css"
import React, { useState, useEffect } from 'react';


function Store({ match }) {

    const [context, setContext] = useState({ 'store': {}, 'stores': [] });

    const fetchStore = async () => {
        const fetchStore = await fetch(`/get-store-id?storeId=${match.params.storeId}`, { mode: 'no-cors' })
        const store = await fetchStore.json();
        setContext({ 'store': store })
        console.log(context['store']);
    };

    useEffect(() => {
        fetchStore();
    }, []);



    return (
        <div className='store-container'>
            <h2 className='store-name'>{context['store'].name}</h2>
            <h3 className='store-info'>{context['store'].address}</h3>
            <p className='store-info'>{context['store'].description}</p>
            <p className='store-info'>{context['store'].openTime}-{context['store'].closeTime}</p>
            <p className='store-info'>Phone Number:{context['store'].phone}</p>
            <a className='store-info' href={context['store'].instagram}>Instagram</a>
            <a className='store-info' href={context['store'].facebook}>Facebook</a>
        </div>
    );
};
export default Store;



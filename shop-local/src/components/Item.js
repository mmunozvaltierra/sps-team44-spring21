import React from 'react';
import "../App.css"

function Item({ name, price }) {
    return (
        <div className="item">
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Item Image</h3>
        </div>
    )
}

export default Item;
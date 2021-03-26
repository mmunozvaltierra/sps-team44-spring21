
import './App.css';
import React, { useState } from "react";
import Item from './components/Item'
import Header from './components/Header'
import StoreInfo from './components/Store-info'
function App() {

  const [items] = useState([
    { name: "Shampoo", price: "7$" },
    { name: "Chocolate", price: "1$" },
    { name: "Milk", price: "4$" },
    { name: "Bitcoin", price: "999$" },
    { name: "Candy", price: "0.5$" },

  ])
  return (
    <div className="app">

      <Header />
      <StoreInfo name={"Dona antonia"}
        address={"Pueblito Don Cuco (Paseo de la victoria #2118 5B)"}
        description={"Un pedacito de Brasil en Cd. Juarez 🇧🇷"}
        openTime={"8:00 AM"}
        closeTime={"6:00 PM"}
        phoneNumber={"526567571621"}
        instagram={"https://www.instagram.com/donaantoniamx/"}
        facebook={"https://www.facebook.com/DONAANTONIAMX"}
      />
      {//This is what creates an item component for each of the elements in the object 'items'}
        <div className="itemDisplay">
          {items.map(item => (
            <Item name={item.name} price={item.price} />
          ))}
        </div>



    </div>
  );
}

export default App;

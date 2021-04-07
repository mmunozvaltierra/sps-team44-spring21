

// Example of requesting a store
// fetch("/get-store?storeName=${name}")
//  .then(response => console.log(response.name));
import './App.css';
import React, { useEffect } from "react";

import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Stores from './components/Stores'
import Home from './components/Home';
import StoreInfo from './components/Store-info'




function App() {

  useEffect(() => {
    fetchItems()
  }, []);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:3001/get-store?storeName=test1");
    //const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const items = await data.json();
    console.log(items);
  }



  return (

    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stores' exact component={Stores} />
          <Route path='/stores/:id' component={StoreInfo} />

        </Switch>

      </div>
    </Router>

  )
}

export default App;

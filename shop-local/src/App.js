

// Example of requesting a store
// fetch("/get-store?storeName=${name}")
//  .then(response => console.log(response.name));
import './App.css';
import React, { useState, useEffect } from "react";

import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Stores from './components/Stores'
import Home from './components/Home';
import Store from './components/Store-info'




function App() {

  const [context, setContext] = useState({})

  return (

    <Router>
      <div className="container">
        <NavBar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stores' exact component={Stores} />
          <Route path='/stores/:storeId' component={Store} />

        </Switch>

      </div>
    </Router>

  )
}

export default App;

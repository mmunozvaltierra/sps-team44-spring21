
import './App.css';
import React, { useState } from "react";
import Store from './Store'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import Stores from './components/Stores'
import Home from './components/Home';
import StoreInfo from './components/Store-info'




function App() {

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

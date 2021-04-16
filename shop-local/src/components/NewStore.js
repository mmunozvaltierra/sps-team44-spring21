import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import "./NewStore.css"
import storePic from "./shop.png"

class NewStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      desc: '',
      address: '',
      openTime: '',
      closeTime: '',
      instagram: '',
      facebook: ''
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  submitHandler = (event) => {
    alert(this.state.name)
  }

  render() {
    return (
      <body>
      <img id="shop-photo" src={storePic} alt="Store Picture" />

      <div id="submission-form-container">
        <form onSubmit={this.submitHandler}>
          <h1 id="submission-title">New Store Information</h1>
          <p id="submission-text">Store information entered here will be displayed on the <Link to='/'>home</Link> page </p>

          <input
            id="store-name-input"
            className="input-area"
            type="text"
            placeholder="Store Name"
            name='name'
            onChange={this.myChangeHandler}
          />
         
          <input
            id="address-input"
            className="input-area"
            type="text"
            placeholder="Store Address"
            name='address'
            onChange={this.myChangeHandler}
          />
    
          <input
            id="open-time-input"
            className="input-area"
            type="text"
            placeholder="Opening Time"
            name='openTime'
            onChange={this.myChangeHandler}
          />
          
          <input
            id="close-time-input"
            className="input-area"
            type="text"
            placeholder="Closing Time"
            name='closeTime'
            onChange={this.myChangeHandler}
          />
          
          <input
            id="phone-number-input"
            className="input-area"
            type="text"
            placeholder="Phone Number"
            name='phone'
            onChange={this.myChangeHandler}
          />
          

          <input
            id="instagram-input"
            className="input-area"
            type="text"
            placeholder="Instagram Link"
            name='instagram'
            onChange={this.myChangeHandler}
          />
          

          <input
            id="facebook-input"
            className="input-area"
            type="text"
            placeholder="Facebook Link"
            name='facebook'
            onChange={this.myChangeHandler}
          />

          <textarea 
            rows="20" 
            cols="75"
            id="description-input"
            className="input-area"
            placeholder="Store Description"
            name='description'
            onChange={this.myChangeHandler}
          />
          

          <input id="submit-button" type="submit" value="Submit"></input>
        </form>
        </div>
        </body>
      );
  }
}

export default NewStore;
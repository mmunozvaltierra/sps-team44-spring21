import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./NewStore.css"
import storePic from "./shop.png"


function NewStore() {

    return (
      <body>
      <img id="shop-photo" src={storePic} alt="Store Picture" />

      <div id="submission-form-container">
        <form>
          <h1 id="submission-title">New Store Information</h1>
          <p id="submission-text">Store information entered here will be displayed on the <Link to='/'>home</Link> page </p>

          <input
            id="store-name-input"
            className="input-area"
            type="text"
            placeholder="Store Name"
          />
         
          <input
            id="address-input"
            className="input-area"
            type="text"
            placeholder="Store Address"
          />
    
          <input
            id="open-time-input"
            className="input-area"
            type="text"
            placeholder="Opening Time"
          />
          
          <input
            id="close-time-input"
            className="input-area"
            type="text"
            placeholder="Closing Time"
          />
          

          
          <input
            id="phone-number-input"
            className="input-area"
            type="text"
            placeholder="Phone Number"
          />
          

          <input
            id="instagram-input"
            className="input-area"
            type="text"
            placeholder="Instagram Link"
          />
          

          <input
            id="facebook-input"
            className="input-area"
            type="text"
            placeholder="Facebook Link"
          />

          <textarea 
            rows="20" 
            cols="75"
            id="description-input"
            className="input-area"
            placeholder="Store Description"
          />
          

          <input id="submit-button" type="submit" value="Submit"></input>
        </form>
        </div>
        </body>
      );
}
export default NewStore;
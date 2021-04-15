import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function NewStore() {

    return (
        <form>
          <h1>Insert New Store</h1>
          <p>Store information entered here will be displayed on the <Link to='/'>home </Link> page </p>
          <label>
              Store Name:
          <input
            type="text"
          />
          </label>
          <label>
              Store Address:
          <input
            type="text"
          />
          </label>

          <label>
              Description:
          <input
            type="text"
          />
          </label>

          <label>
              Opening Time:
          <input
            type="text"
          />
          </label>

          <label>
              Closing Time:
          <input
            type="text"
          />
          </label>

          <label>
              Phone Number:
          <input
            type="text"
          />
          </label>

          <label>
              Instagram Link:
          <input
            type="text"
          />
          </label>

          <label>
              Facebook Link:
          <input
            type="text"
          />
          </label>

          <input type="submit" value="submit"></input>
        </form>
      );
}
export default NewStore;
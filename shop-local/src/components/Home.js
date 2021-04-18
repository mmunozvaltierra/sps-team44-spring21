import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import Stores from './Stores'

const Home = () => {

    return (

        <div className="container">
            <div className='logo'>
                <h1>Shop Local</h1>
            </div>
            <div className='description'>
                <p>
                    Shop local is a platform in which you can find local businesses to support.
                    Below are listed a couple of stores that you can try to help.
                    This is a project by Mauricio Munoz and Carlos Ortega as part of Google's
                    Software Product Sprint Spring 2021.
                </p>
            </div>

            <Stores />

        </div>
    )
}


export default Home;

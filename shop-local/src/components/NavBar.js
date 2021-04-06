import React from 'react'
import { Route, Link } from 'react-router-dom'
import logo from '../shop-local-logo.png'
import Store from '../Store'


function NavBar() {
    return (
        <nav className='header'>
            <img src={logo} />

            <ul className='nav-links'>

                <Link className='nav-style' to='/' >
                    <li>Home</li>
                </Link >
                <Link className='nav-style' to='/stores' >
                    <li>Stores</li>
                </Link >

            </ul>
        </nav>
    )
}

export default NavBar
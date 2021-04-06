import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../shop-local-logo.png'


function NavBar() {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />

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
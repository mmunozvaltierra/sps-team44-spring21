import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../shop-local-logo.png'
import SearchStore from './SearchStore'


function NavBar() {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />

            <SearchStore />

            <ul className='nav-links'>

                <Link className='nav-style' to='/' >
                    <li>Home</li>
                </Link >
                <Link className='nav-style' to='/stores' >
                    <li>Stores</li>
                </Link >
                <Link className='nav-style' to='/new-store-form' >
                    <li>Insert New Store</li>
                </Link >

            </ul>
        </nav>
    )
}

export default NavBar
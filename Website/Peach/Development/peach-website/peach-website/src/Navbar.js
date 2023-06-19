import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='logo'>
                <img src="img/logo.jpg"/>
            </div>
            <div className="nav-menu">
                <div className='nav-button'>Home</div>
                <div className='nav-button'>Cakes</div>
                <div className='nav-button'>Flavours</div>
                <div className='nav-button'>Contact Us</div>
                <div className='nav-button'>Order</div>
            </div>

        </div>
    )
}

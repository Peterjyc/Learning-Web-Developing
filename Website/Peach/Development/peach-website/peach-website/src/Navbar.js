import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='logo'>
                <img src="img/logo.jpg" alt='logo'/>
            </div>
            <div className="nav-menu">
                <div className='spacer'></div>
                <div className='nav-button'>CAKES</div>
                <div className='nav-button'>FLAVOURS</div>
                <div className='nav-button'>CONTACT</div>
                <div className='spacer'></div>
            </div>

        </div>
    )
}

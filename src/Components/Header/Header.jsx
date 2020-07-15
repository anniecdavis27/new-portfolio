import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './header.scss';

function Header() {

    const [menuStatus, setMenuStatus] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const handleMenuToggle = (e) => {
        if(menuStatus === false && showMenu === false) {
            setMenuStatus(true)
            setShowMenu(true)
         } else {
            setMenuStatus(false)
            setShowMenu(false)
         }
    }
    
    return (
        <header>
            <nav className='navflex'>
                <Link to="/" id="home" className='header-item'>
                    <h1 id='logo' onClick={showMenu ? handleMenuToggle : null}><img src='https://live.staticflickr.com/65535/50106357486_1ba7db79b5_o.png' alt='site logo'></img></h1>
                </Link>

                    <Link to="/works" id="works" className='header-item'>
                        <h1 className="nav-link-desktop" id="nav-one" onClick={handleMenuToggle}>Works</h1>
                    </Link>

                    <Link to="/bio" id="bio" className='header-item'>
                        <h1 className="nav-link-desktop" id="nav-two" onClick={handleMenuToggle}>Bio</h1>
                    </Link>

                    <Link to="/resume" id="resume" className='header-item'>
                        <h1 className="nav-link-desktop" id="nav-two" onClick={handleMenuToggle}>Resume</h1>
                    </Link>

                    <Link to="/contact" id="contact" className='header-item'>
                        <h1 className="nav-link-desktop" id="nav-two" onClick={handleMenuToggle}>Contact</h1>
                    </Link>

                <div className={`hamburger-btn ${menuStatus ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <div className="hamburger-patty"></div>
                </div>
            </nav>

            <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
                <Link to="/works" id="works" className='header-item'>
                    <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>Works</h1>
                </Link>

                <Link to="/bio" id="bio" className='header-item'>
                    <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>Bio</h1>
                </Link>

                <Link to="/resume" id="resume" className='header-item'>
                    <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>Resume</h1>
                </Link>

                <Link to="/contact" id="contact" className='header-item'>
                    <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>Contact</h1>
                </Link>
            </div>
        </header>
    );
}

export default Header;
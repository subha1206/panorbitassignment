import React from 'react';
import Hamburger  from '../../assets/hamburger.png'
import Logo from '../../assets/logo.jpg'
import './header.styles.scss'

const Header = () => {
        return (
            <div className='header'>
                <div className='logos'>
                    <img className='hamburger' src={Hamburger} alt="logo" />
                    <img src={Logo} alt="logo" />
                </div>
                <div className='user'>
                    <img src={Logo} alt=""/>
                </div>
            </div>
        )
}

export default Header;
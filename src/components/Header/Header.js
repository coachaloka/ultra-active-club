import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='headernav'>
                <img src={logo}alt=""/>
             <div>
                <a href="">Shop</a>
                <a href="">Blog</a>
                <a href="">Enroll</a>
            </div>   
            </nav>
        </div>
    );
};

export default Header;

import React from 'react';
import './Header.css';

const Header = () => {
    return (
     
        <nav className='headernav'>
                <div>
                    <h1>English Learning Center</h1>
                </div>
            
            <div>
                <a href="/shop">shop</a>
                <a href="/blog">blog</a>
                <a href="/orders">orders</a>
            </div>
        </nav> 
    );
};

export default Header;
import React from 'react';
import './Header.css';

const Header = () => {
    return (
     
        <nav className='headernav'>
                <div>
                    <h2>English Learning Center</h2>
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
import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return(

        <nav className="header-nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>    
                <li><NavLink to="/admin" className="login">Login</NavLink></li>    
            </ul>
                
        </nav>
         
    )
}


export default Header;
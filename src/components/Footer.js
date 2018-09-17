import React from 'react'
import facebook from "../assets/imgs/facebook.svg";
import instagram from "../assets/imgs/instagram.svg";
import twitter from "../assets/imgs/twitter.svg";
const Footer = () => {
    return(
        <div className="footer">
            <nav className="footer-nav">
                <ul>
                    <li><img src={facebook} alt=""/></li>
                    <li><img src={instagram} alt=""/></li>
                    <li><img src={twitter} alt=""/></li>
                </ul>
            </nav>
            <p>All images are for educational purposes.</p>    
        </div>
        
         
    )
}


export default Footer;
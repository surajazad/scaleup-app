import React from 'react';
import './Header.css';

const Header = ()=> {
    return (
        <div className="header">
            <img className="logo" src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg"></img>
            <ul className="menu">
                <li><a href="">Our Services</a></li>
                <li><a href="">Case Studies</a></li>
                <li><a href="">Growth Tips</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Header;

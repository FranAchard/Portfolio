import React from "react";
import "./header.css"
import "boxicons"
const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo" >Francisco Achard</a>
            <box-icon name='menu' id="menu-icon"></box-icon>
            <nav className="navBar">
                <a href="#home" className="active">Home</a>
                <a href="http://localhost:3000/about">About</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
export default Header;
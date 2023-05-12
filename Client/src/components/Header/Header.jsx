import React from "react";
import "./header.css"
import "boxicons"
const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo" >Francisco Achard</a>
            <box-icon name='menu' id="menu-icon"></box-icon>
            <nav className="navBar">
                <a href="http://localhost:3000" className="active">Home</a>
                <a href="https://portfolio-three-amber-54.vercel.app/about" className="active">About</a>
                <a href="http://localhost:3000/education" className="active">Education</a>
                <a href="http://localhost:3000/skills" className="active">Skills</a>
                <a href="http://localhost:3000/contact" className="active">Contact</a>
            </nav>
        </header>
    )
}
export default Header;

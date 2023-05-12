import React from "react";
import "./header.css"
import "boxicons"
const Header = () => {
    return (
        <header className="header">
            <a href="https://portfolio-three-amber-54.vercel.app" className="logo" >Francisco Achard</a>
            <box-icon name='menu' id="menu-icon"></box-icon>
            <nav className="navBar">
                <a href="https://portfolio-three-amber-54.vercel.app" className="active">Home</a>
                <a href="https://portfolio-three-amber-54.vercel.app/about" className="active">About</a>
                <a href="https://portfolio-three-amber-54.vercel.app/education" className="active">Education</a>
                <a href="https://portfolio-three-amber-54.vercel.app/skills" className="active">Skills</a>
                <a href="https://portfolio-three-amber-54.vercel.app/contact" className="active">Contact</a>
            </nav>
        </header>
    )
}
export default Header;

import React from "react";
import "./principal.css"
const Principal=()=>{
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Hi, I'm <span>Francisco Achard</span></h1>
                <div className="text-animate">
                    <h3>Frontend Developer</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi provident officia, explicabo illum fugiat ullam. Impedit, aperiam! Totam labore incidunt in, placeat ex a? Repudiandae molestiae accusantium iusto ut?</p>
                <div className="btn-box">
                    <a href="#" className="btn">Hire me</a>
                    <a href="#" className="btn">Let's Talk</a>
                </div>
            </div>
            <div className="home-sci">
                <a href="https://github.com/FranAchard"><box-icon type='logo' name='github'></box-icon></a>
                <a href="https://www.linkedin.com/in/francisco-achard-9862641b3/"><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href="https://www.instagram.com/_fran_achard/"><box-icon name='instagram-alt' type='logo' ></box-icon></a>
            </div>
            <img className="foto" src="/public/assets/perfil.jpeg"></img>
        </section>
    )
}
export default Principal
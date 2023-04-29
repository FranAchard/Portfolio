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
        </section>
    )
}
export default Principal
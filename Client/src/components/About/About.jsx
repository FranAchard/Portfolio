import React from "react";
import './about.css';
import Header from "../Header/Header";
const About = () => {
    return (
        <div>
            <Header/>
        <div className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                <img src="./assets/About.png" />
                    <span className="circle-spin"></span>
            </div>
            <div className="about-content">
                <h3>Frontend Developer!</h3>
                <p>Hello, my name is Francisco Achard and I am 21 years old. I am a Frontend developer with experience in the following technologies: JavaScript, HTML, CSS, Node, React, Redux, SQL and Typescript. I am also familiar with the Vite development tool.

I am passionate about technology and love to keep up with the latest trends and advancements in the field of web development. I love working in a team and I am very collaborative. I enjoy learning from others and sharing my knowledge with those who are willing to listen.

I am currently looking for career opportunities in the web development field. I would love to work in an environment that challenges me and allows me to grow both personally and professionally.

In my portfolio you will find some of my most recent work, where I have used my Frontend skills to create modern and functional web applications. If you are interested in working with me or if you have any questions, feel free to contact me through my email or my social networks.

Thanks for visiting my portfolio!</p>
                <div className="btn-box btns">
                    <a href="https://portfolio-three-amber-54.vercel.app/education" className="btn">Read More</a>
                </div>
            </div>
        </div>
        </div>
    )
}
export default About
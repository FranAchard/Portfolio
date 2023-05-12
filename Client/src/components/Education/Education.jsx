import React from "react";
import Header from "../Header/Header";
import './education.css'
const Education =()=>{
    return (
        <div>
            <Header/>
            <div className="education" id="education">
                <h2 className="heading"> My <span>Journey</span></h2>
                <div className="education-row">
                    <div className="education-column">
                        <h3 className="title">Education</h3>
                        <div className="education-box">
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><box-icon name='calendar' type='solid' ></box-icon>2022 - 2023</div>
                                    <h3>SoyHenry</h3>
                                    <p>During the six months of this Full Stack Developer Bootcamp, I had the opportunity to acquire key skills for web development. Through the intensive training program, I learned how to build complete web applications, from creating the user interface to programming the server logic and database management.

In particular, the program allowed me to delve into key areas of web development, such as Front End, Back End, JavaScript, HTML, CSS, Node, React, Redux and SQL. I learned how to design and develop attractive and functional user interfaces using technologies such as HTML and CSS, and how to program server-side logic using JavaScript and Node.

In addition, I also became familiar with popular client-side technologies, such as React and Redux, which allowed me to build modern and highly interactive web applications. Finally, I acquired SQL skills, which allowed me to effectively manage and administer databases.

In summary, this Full Stack Developer Bootcamp gave me a complete and solid training in web development, which allowed me to be prepared to face the challenges of today's working world in this area.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><box-icon name='calendar' type='solid' ></box-icon>2023</div>
                                    <h3>FreeCodeCamp</h3>
                                    <p>The course I took was a very enriching experience, with a duration of 300 hours. During this time, I had the opportunity to reinforce my knowledge in the field of web development and to learn new tools and techniques to improve my work as a programmer.

                                        The course was focused on learning the fundamental sciences of web development, such as HTML and CSS. Through practice and the use of specialized tools, I learned to create and design web pages effectively, optimizing their appearance and functionality.</p>
                                    <img className="titulo-img" src="./assets/titulo-free.png" alt="Free-code-camp"></img>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><box-icon name='calendar' type='solid'></box-icon>2022</div>
                                    <h3>Web Programmer Professional Training Course</h3>
                                    <p>The course that I took over a period of 6 months was an enriching experience in my path as a programmer. I learned to use essential languages in web development, such as HTML, CSS, JavaScript and SQL, which allowed me to understand the structure, design and functionality of web pages.
                                        Besides being my first approach to the world of programming, the course gave me the opportunity to consolidate my knowledge and skills in the creation of web pages. From the beginning of the course, I learned how to create a web page from scratch, adding styles, images, content and logic to make it work properly.
                                        In summary, the course I took was an enriching experience that allowed me to acquire new knowledge in the field of web programming and improve my technical skills to develop web pages effectively.</p>
                                    <img className="titulo-img" src="./assets/curso-uom.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;

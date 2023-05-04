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
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum perspiciatis culpa praesentium. Voluptate, nisi at amet, velit a omnis neque architecto quisquam reiciendis ratione eum consectetur quo officiis mollitia odit. </p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><box-icon name='calendar' type='solid' ></box-icon>2022 - 2023</div>
                                    <h3>FreeCodeCamp</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum perspiciatis culpa praesentium. Voluptate, nisi at amet, velit a omnis neque architecto quisquam reiciendis ratione eum consectetur quo officiis mollitia odit. </p>
                                    <img className="titulo-img" src="/public/assets/titulo-free.png" alt="Free-code-camp"></img>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><box-icon name='calendar' type='solid'></box-icon>2022</div>
                                    <h3>Curso de formacion profesional de Programador Web</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum perspiciatis culpa praesentium. Voluptate, nisi at amet, velit a omnis neque architecto quisquam reiciendis ratione eum consectetur quo officiis mollitia odit. </p>
                                    <img className="titulo-img" src="/public/assets/curso-uom.png"></img>
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
import React from "react";
import Header from "../Header/Header";
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
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><box-icon name='calendar' type='solid'></box-icon>2022</div>
                                    <h3>Centro de Formación Profesional 421 UOM La Plata</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum perspiciatis culpa praesentium. Voluptate, nisi at amet, velit a omnis neque architecto quisquam reiciendis ratione eum consectetur quo officiis mollitia odit. </p>
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
import React from "react";
import Header from "../Header/Header";
import './skills.css'
const Skills=()=>{
    return (
        <div>
            <Header/>
            <div className="skills" id="skills">
                <h2 className="heading">My <span>Skills</span></h2>
                <div className="skills-row">
                    <div className="skills-column">
                        <h3 className="title">Coding Skills</h3>
                        <div className="skills-box">
                            <div className="skills-content">
                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>CSS <span>70%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>JavaScript <span>60%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>React <span>60%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Redux <span>40%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>TypeScript <span>30%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Bootstrap <span>50%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>SCSS <span>50%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>PGAdmin <span>50%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Skills;
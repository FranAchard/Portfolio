import React from "react";
import Header from "../Header/Header";
import "./contact.css"
const Contacto =()=>{
    return (
        <div>
            <Header/>
            <div className="contact">
                <h2 className="heading">Contact <span>Me!</span></h2>
                <form action="">
                    <div className="input-box">
                        <div className="input-field">
                        <input type="text" placeholder="Full Name" required />
                        <span className="focus"></span>
                        </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Address" required />
                        <span className="focus"></span>
                    </div>
                    </div>
                    <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Mobile Number" required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Subject" required />
                        <span className="focus"></span>
                    </div>
                    </div>
                    <div className="textarea-field">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                            <span className="focus"></span>
                    </div>
                    <div className="btn-box btns">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contacto;
import React from "react";
import Header from "../Header/Header";
import "./contact.css"; 
const Contacto =()=>{
    return (
        <div>
            <Header/>
            <div className="contact">
                <h2 className="heading">Contact <span>Me!</span></h2>
                <form action="https://formsubmit.co/e66ba59ad68812c89c30925065245046" method="post">
                    <div className="input-box">
                        <div className="input-field">
                        <input name="name" type="text" placeholder="Full Name" required />
                        <span className="focus"></span>
                        </div>
                    <div className="input-field">
                        <input name="mail"  type="text" placeholder="Email Address" required />
                        <span className="focus"></span>
                    </div>
                    </div>
                    <div className="input-box">
                    <div className="input-field">
                        <input name="cel" type="number" placeholder="Mobile Number" required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input name="subject" type="text" placeholder="Email Subject" required />
                        <span className="focus"></span>
                    </div>
                    </div>
                    <div className="textarea-field">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                            <span className="focus"></span>
                    </div>
                    <div className="btn-box btns">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                    <input type="hidden" name="_next" value="https://portfolio-three-amber-54.vercel.app" />
                    <input type="hidden" name="_captcha" value="false" />
                </form>
            </div>
        </div>
    )
}
export default Contacto;
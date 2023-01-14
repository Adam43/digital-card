import React from "react";
import profilePic from "../images/profile-pic.jpeg"
import emailLogo from "../images/email.jpg";
import linkedinLogo from "../images/linkedin.png"

export default function Info() {
    return (
        <div className="info">
            <img src={profilePic} />
            <h1 className="name">Kwame Bullen</h1>
            <h4 className="job">FullStack Developer</h4>
                <p className="site-name">kwamebullen.website</p>
            <div className="buttons">
                <button className="btn-one">
                    <img src={emailLogo} width="20px" />
                    <span>Email</span>
                </button>
                <button className="btn-two">
                    <img src={linkedinLogo} width="20px" />
                    <span>Linkedin</span>
                </button>
            </div>
        </div>
    )
}
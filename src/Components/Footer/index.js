import React from "react";
import './style.css'
import Resume from '../../images/resume.pdf';

const Footer = () => {
    return (
            <footer id="contact">
                    <a className="linkedin" href="https://www.linkedin.com/in/ryan-akira-klotzbach-mba-a67b79149" >LinkedIn</a>
                
                    <a className="gitHub" href="https://github.com/Raklotzbach" >GitHub</a>
                
                    <a className="resume" href={Resume} >Resume</a>
                
            </footer>
    )
};

export default Footer;
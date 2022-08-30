import React from 'react';
import './style.css'
import Selfie from '../../images/selfie.jpg'
// import { Link } from 'react-router-dom';

function Bio() {
    return (
        <div>
            <p>Hi!  Welcome to my portfolio.  My name is Ryan Akira Klotzbach and I primarily go by my middle name Akira.  I am a junior developer and am expereince with both the frontend and backend frameworks.  I am an automotive enthusiast with a passion for tech.  I hope you enjoy my site and reach out with any questions!  Happy browsing!  </p>
            <br></br>
            <img src={Selfie} alt="" className='picture'/>
            <p>Below you will find projects that I have completed.  Enjoy!</p>
        </div>
    )
}


export default Bio;
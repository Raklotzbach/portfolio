import React from 'react';
import Ballhog from '../../images/ballhog.png';
import Pursuit from '../../images/jobPursuit.png';
import Weather from '../../images/weatherApp.png';
import Kicks from '../../images/sass.png';
import './style.css'


const Project = () => {
    return (
        <div id='projects'>
            <ul>
                <a href="https://damonandrews.github.io/AwesomeGroupProject1/" className='ballhog'>
                    <img className='hog' src={Ballhog} alt="Ballhog" />
                </a>
                <a href="https://job-pursuit-tracking.herokuapp.com/login" className='jobPursuit'>
                    <img className='pursuit' src={Pursuit} alt="pursuit" />
                </a>
                <a href="https://raklotzbach.github.io/weather-dashboard/" className='weather'>
                    <img className='storm' src={Weather} alt="weather" />
                </a>
                <a href="https://damonandrews.github.io/AwesomeGroupProject1/" className='sneakers'>
                    <img className='sneaks' src={Kicks} alt="shoes" />
                </a>
            </ul>

        </div>
    )
}



export default Project;
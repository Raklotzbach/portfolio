import React from 'react';
import './style.css';

const NavBar = () => {
    return (
        <div className='navigation'>
            <nav>
                <ul>
                    <li>
                        <a class="legend" href="#aboutme">About Me</a>
                    </li>
                    <li>
                        <a class="legend" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a class="legend" href="#contact">Contact</a>
                    </li>
                    {/* <li>
                        <a class="legend" href="https://www.linkedin.com/in/ryan-akira-klotzbach-mba-a67b79149">LinkedIn</a>
                    </li> */}
                </ul>
            </nav>  
        </div>           
    )
}


export default NavBar;
import React from 'react';
import '../../Main.css';
import classes from './about.module.css';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={[classes.AboutPage, 'container', 'flex-content'].join(' ')} >
            <h1>What I do</h1>
            <h3>
                I create web sites and applications by using the tools that you can get familiar with <Link to="/skills"> on the next page. </Link>
                In the development process I like applying the best pretty desing solutions to let a project look most 
                user - friendly and 
            </h3>
        </div>
    )
}

export default About;
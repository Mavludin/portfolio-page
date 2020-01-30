import React from 'react';
import '../../Main.css';
import classes from './about.module.css';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={[classes.AboutPage, 'flex-content', 'Page'].join(' ')} >
            <h1 datatype="What do I do?">What do I do?</h1>
            <p>
                I build web sites and applications by utilizing the most progressive tools that you can get familiar with on <Link to="/skills"> the next page. </Link> 
                During the development process, I adhere to attractive design solutions that provide maximum user-friendliness and simplicity simultaneously.
            </p>
        </div>
    )
}

export default About;
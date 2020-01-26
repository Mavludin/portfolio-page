import React from 'react';
import '../../Main.css';
import classes from './about.module.css';

const About = () => {
    return (
        <div className={[classes.AboutPage, 'container', 'flex-content'].join(' ')} >
            <h1 datatype="What I do">What I do</h1>
            <p>
                I build web sites and applications by utilizing the most progressive frontend and dev tools that you can get familiar with on the next page. 
                During the development process, I adhere to attractive design solutions that provide maximum user-friendliness.
            </p>
        </div>
    )
}

export default About;
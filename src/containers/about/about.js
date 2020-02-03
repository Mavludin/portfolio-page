import React from 'react';
import '../../Main.css';
import classes from './about.module.css';

import { Link } from 'react-router-dom';

import scrollAndPageFlip from '../../Utils/PageFlipAndScrollTop';

const About = () => {

    return (
        <div className={[classes.AboutPage, 'flex-content', 'Page'].join(' ')} >
            <h1 datatype="What do I do?">What do I do?</h1>

            <i className={["fas fa-user-astronaut", classes.Astronaut].join(' ')}></i>
            {/* <i className={["far fa-hand-paper", classes.Wave].join(' ')}></i> */}

            <p>
                I build web sites and applications by utilizing the most progressive web technologies that you can get familiar with on 
                <Link onClick={scrollAndPageFlip} to="/skills"> the next page. </Link> 
                During the development process, I adhere to attractive design solutions that provide maximum user experience and simplicity simultaneously.
            </p>
        </div>
    )
}

export default About;
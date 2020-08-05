import React from 'react';

import classes from './homepage.module.css';
import '../../Main.css';

import { Link } from 'react-router-dom';

import scrollAndPageFlip from '../../utils/PageFlipAndScrollTop';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const HomePage = () =>  {

    return (
        <div className={[classes.HomePage, 'flex-content', 'Page'].join(' ')}>
            <h1> Hello, I'm <span>Mavludin</span> <br/> A front-end web developer </h1>
            <Link onClick={scrollAndPageFlip} to="/about" className={classes.RedBtn} href="/"><span>Get started</span><ArrowForwardIcon /> </Link>
        </div>
    )

}
export default HomePage;
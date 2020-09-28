import React from 'react';

import classes from './HomePage.module.css';
import '../../Main.css';

import { Link } from 'react-router-dom';

import {scrollAndPageFlipSound} from '../../utils/projectFunctions';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const HomePage = () =>  {

    return (
        <div className={`${classes.HomePage} flex-content Page`}>
            <h1> Hello, I'm <span>Mavludin</span> <br/> A front-end web developer </h1>
            <Link onClick={scrollAndPageFlipSound} to="/about" className={classes.RedBtn}>
                <span>Get started</span><ArrowForwardIcon /> 
            </Link>
        </div>
    )

}
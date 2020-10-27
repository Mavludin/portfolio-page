import React from 'react';

import classes from './HomePage.module.css';

import { Link } from 'react-router-dom';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const HomePage = () =>  {

    return (
        <div className={`${classes.HomePage} flex-content Page`}>
            <h1> Hello, I'm <span>Mavludin</span> <br/> A front-end web developer </h1>
            <Link to="/about" className={classes.RedBtn}>
                <span>Get started</span><ArrowForwardIcon /> 
            </Link>
        </div>
    )

}
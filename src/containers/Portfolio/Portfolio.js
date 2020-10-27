import React from 'react';
import classes from './Portfolio.module.css';

import Html5Icon from '../../assets/images/html-5.svg';
import Css3Icon from '../../assets/images/css-3.svg';
import JsIcon from '../../assets/images/js.svg';
import ReactIcon from '../../assets/images/react.svg';
import ReduxIcon from '../../assets/images/redux.svg';
import GitIcon from '../../assets/images/git.svg';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const Portfolio = () => {

    return (
        <div className={`${classes.PortfolioPage} flex-content Page`}>
            <h1 datatype="My recent works">My recent works</h1>

            <div className={classes.Content}>

                <div className={[classes.Item, classes.ECommerce].join(' ')}>
                    <h2>E-commerce</h2>
                    <div className={classes.ItemInner}>
                        <a href="https://mavludin-e-commerce.netlify.com/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            <span>Take a look</span> <ArrowForwardIcon />
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={JsIcon} alt="Js icon" />
                            <img src={ReactIcon} alt="React icon" />
                            <img src={GitIcon} alt="Git icon" />
                            <img src={ReduxIcon} alt="Redux icon" />
                        </p>
                    </div>
                </div>
                <div className={[classes.Item, classes.MusicPlayer].join(' ')}>
                    <h2>Music player</h2>
                    <div className={classes.ItemInner}>
                        <a href="https://mavludin-music-player.netlify.com/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            <span>Take a look</span> <ArrowForwardIcon />
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={JsIcon} alt="Js icon" />
                            <img src={ReactIcon} alt="React icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={[classes.Item, classes.AdminPage].join(' ')}>
                    <h2>Admin page</h2>
                    <div className={classes.ItemInner}>
                        <a href="https://react-admin-page.firebaseapp.com/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            <span>Take a look</span> <ArrowForwardIcon />
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={JsIcon} alt="Js icon" />
                            <img src={ReactIcon} alt="React icon" />
                            <img src={GitIcon} alt="Git icon" />
                            <img src={ReduxIcon} alt="Redux icon" />
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
    
}
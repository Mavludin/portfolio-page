import React from 'react';
import '../../Main.css';
import classes from './portfolio.module.css';

import Html5Icon from '../../img/html-5.svg';
import Css3Icon from '../../img/css-3.svg';
import SassIcon from '../../img/sass.svg';
import JsIcon from '../../img/js.svg';
import JQueryIcon from '../../img/jquery.svg';
import ReactIcon from '../../img/react.svg';
import ReduxIcon from '../../img/redux.svg';
import GitIcon from '../../img/git.svg';
import PsIcon from '../../img/ps.svg';
import FigmaIcon from '../../img/figma.svg';

const Portfolio = () => {
    return (
        <div className={[classes.PortfolioPage, 'container', 'flex-content'].join(' ')} >
            <h1>Portfolio</h1>

            <div className={classes.Content}>
                <div className={classes.Item}>
                    <div className={classes.ItemInner}>
                        <h2>Favourite places</h2>
                        <a href="/#" className='redBtn'>
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.ItemInner}>
                        <h2>Vegan store</h2>
                        <a href="/#" className='redBtn'>
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.ItemInner}>
                        <h2>Momento replica</h2>
                        <a href="/#" className='redBtn'>
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.ItemInner}>
                        <h2>E-commerce</h2>
                        <a href="/#" className='redBtn'>
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.ItemInner}>
                        <h2>Music player</h2>
                        <a href="/#" className='redBtn'>
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.ItemInner}>
                        <h2>Admin page</h2>
                        <a href="/#" className='redBtn'>
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
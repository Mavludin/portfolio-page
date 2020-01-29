import React from 'react';
import '../../Main.css';
import classes from './portfolio.module.css';

import Html5Icon from '../../img/html-5.svg';
import Css3Icon from '../../img/css-3.svg';
import JsIcon from '../../img/js.svg';
import JQueryIcon from '../../img/jquery.svg';
import ReactIcon from '../../img/react.svg';
import ReduxIcon from '../../img/redux.svg';
import GitIcon from '../../img/git.svg';

const Portfolio = () => {
    return (
        <div className={[classes.PortfolioPage, 'flex-content', 'Page'].join(' ')} >
            <h1 datatype="Portfolio">Portfolio</h1>

            <div className={classes.Content}>
                <div className={[classes.Item, classes.FavPlaces].join(' ')}>
                    <div className={classes.ItemInner}>
                        <h2>Favourite places</h2>
                        <a href="https://mavludin-html-css-project.glitch.me/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
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
                <div className={[classes.Item, classes.VeganStore].join(' ')}>
                    <div className={classes.ItemInner}>
                        <h2>Vegan store</h2>
                        <a href="https://mavludin-landing-page.glitch.me/home.html" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={JsIcon} alt="Js icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={[classes.Item, classes.MomentoReplica].join(' ')}>
                    <div className={classes.ItemInner}>
                        <h2>Momento replica</h2>
                        <a href="https://mavludin-todo-list.glitch.me/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            Take a look <i className="fas fa-arrow-right"></i>
                        </a>
                        <p className={classes.Tools}>
                            <span>Tools: </span>
                            <img src={Html5Icon} alt="Html 5 icon" />
                            <img src={Css3Icon} alt="Css 3 icon" />
                            <img src={JsIcon} alt="Js icon" />
                            <img src={JQueryIcon} alt="JQuery icon" />
                            <img src={GitIcon} alt="Git icon" />
                        </p>
                    </div>
                </div>
                <div className={[classes.Item, classes.ECommerce].join(' ')}>
                    <div className={classes.ItemInner}>
                        <h2>E-commerce</h2>
                        <a href="https://mavludin-react-e-commerce.glitch.me/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            Take a look <i className="fas fa-arrow-right"></i>
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
                    <div className={classes.ItemInner}>
                        <h2>Music player</h2>
                        <a href="https://mavludin-music-player.glitch.me/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            Take a look <i className="fas fa-arrow-right"></i>
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
                    <div className={classes.ItemInner}>
                        <h2>Admin page</h2>
                        <a href="https://react-admin-page.firebaseapp.com/" className={classes.RedBtn} target="_blank" rel="noopener noreferrer">
                            Take a look <i className="fas fa-arrow-right"></i>
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

export default Portfolio;
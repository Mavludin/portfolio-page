import React from 'react';
import classes from './skills.module.css';
import '../../Main.css';

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
import BootstrapIcon from '../../img/bootstrap.svg';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className={[classes.SkillsPage, 'flex-content', 'Page'].join(' ')}>
            <h1 datatype="Skills">Skills</h1>

            <div className={classes.Skills}>

                <div className={classes.DesingTools}>
                    <h2 datatype="Skills">Design Tools</h2>
                    <ul>
                        <li><img src={PsIcon} alt="Photoshop icon" /><span>Photoshop</span></li>
                        <li><img src={FigmaIcon} alt="Figma icon" /><span>Figma</span></li>
                    </ul>

                </div>

                <div className={classes.DevTools}>
                    <h2 datatype="Skills">Dev Tools</h2>
                    <ul>
                        <li><img src={GitIcon} alt="Git icon" /><span>Git</span></li>
                        <li><img src={ReduxIcon} alt="Redux icon" /><span>Redux</span></li>
                        <li><img style={{width: '24px'}} src={BootstrapIcon} alt="Bootstrap Icon" /><span>Bootstrap</span></li>
                        <li><img src={JQueryIcon} alt="JQuery icon" /><span>JQuery</span></li>

                    </ul>

                </div>

                <div className={classes.Languages}>
                    <h2 datatype="Skills">Languages</h2>
                    <ul>
                        <li><img src={Html5Icon} alt="Html 5 icon" /><span>HTML5</span></li>
                        <li><img src={Css3Icon} alt="Css 3 icon" /><span>CSS3</span></li>
                        <li><img src={SassIcon} alt="Sass icon" /><span>SASS (SCSS)</span></li>
                        <li><img style={{borderRadius: '20px'}}  src={JsIcon} alt="JS icon" /><span>JavaScript</span></li>
                        <li><img className={classes.SpinIcon} src={ReactIcon} alt="React icon" /><span>React JS</span></li>

                    </ul>

                </div>

            </div>

            <p>You must be wondering what I have done with all the things above. Well, 
                <Link onClick={()=>document.querySelector('audio').play()} to="/portfolio"> here you go</Link>.
            </p>

        </div>
    )
}

export default Skills;
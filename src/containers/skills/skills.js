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

const Skills = () => {
    return (
        <div className={[classes.SkillsPage, 'container', 'flex-content'].join(' ')}>
            <h1 datatype="Skills">Skills</h1>
            <ul>

                <li><img src={PsIcon} alt="Photoshop icon" />Photoshop</li>
                <li><img src={Html5Icon} alt="Html 5 icon" />HTML5</li>
                <li><img src={JsIcon} alt="JS icon" />JavaScript</li>
                <li><img src={GitIcon} alt="Git icon" />Git</li>
                <li><img src={FigmaIcon} alt="Figma icon" />Figma</li>
                <li><img src={Css3Icon} alt="Css 3 icon" />CSS3</li>
                <li><img src={JQueryIcon} alt="JQuery icon" />JQuery</li>
                <li><img src={ReduxIcon} alt="Redux icon" />Redux</li>
                <li><img src={SassIcon} alt="Sass icon" />SASS (SCSS)</li>
                <li><img className={classes.SpinIcon} src={ReactIcon} alt="React icon" />React JS</li>

            </ul>
        </div>
    )
}

export default Skills;
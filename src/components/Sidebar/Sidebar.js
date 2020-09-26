import React from 'react';
import classes from './Sidebar.module.css';

import { NavLink } from 'react-router-dom';

import {scrollAndPageFlipSound} from '../../utils/projectFunctions';

import pointDownIcon from '../../assets/images/aside/point-down.svg';

export const Sidebar = () => {

    return (
        <aside>
            <div><img src={pointDownIcon} alt="Point down" /></div>
            <NavLink onClick={()=>scrollAndPageFlipSound()} exact={true} activeClassName={classes.Active} to="/"><div></div></NavLink>
            <NavLink onClick={()=>scrollAndPageFlipSound()} activeClassName={classes.Active} exact to="/about"><div></div></NavLink>
            <NavLink onClick={()=>scrollAndPageFlipSound()} activeClassName={classes.Active} exact to="/skills"><div></div></NavLink>
            <NavLink onClick={()=>scrollAndPageFlipSound()} activeClassName={classes.Active} exact to="/portfolio"><div></div></NavLink>
        </aside>
    )
    
}
import React from 'react';
import classes from './Sidebar.module.css';

import { NavLink } from 'react-router-dom';

import pointDownIcon from '../../assets/images/aside/point-down.svg';

export const Sidebar = () => {

    return (
        <aside>
            <div><img src={pointDownIcon} alt="Point down" /></div>
            <NavLink exact={true} activeClassName={classes.Active} to="/"><div></div></NavLink>
            <NavLink activeClassName={classes.Active} exact to="/about"><div></div></NavLink>
            <NavLink activeClassName={classes.Active} exact to="/skills"><div></div></NavLink>
            <NavLink activeClassName={classes.Active} exact to="/portfolio"><div></div></NavLink>
        </aside>
    )
    
}
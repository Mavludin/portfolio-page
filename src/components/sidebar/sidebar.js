import React from 'react';
import classes from './sidebar.module.css';

import { NavLink } from 'react-router-dom';

const sidebar = () => {
    return (
        <aside>
            <div><i class="far fa-hand-point-down"></i></div>
            <NavLink onClick={()=>document.querySelector('audio').play()} exact={true} activeClassName={classes.Active} to="/"><div></div></NavLink>
            <NavLink onClick={()=>document.querySelector('audio').play()} activeClassName={classes.Active} exact to="/about"><div></div></NavLink>
            <NavLink onClick={()=>document.querySelector('audio').play()} activeClassName={classes.Active} exact to="/skills"><div></div></NavLink>
            <NavLink onClick={()=>document.querySelector('audio').play()} activeClassName={classes.Active} exact to="/portfolio"><div></div></NavLink>
        </aside>
    )
}

export default sidebar;
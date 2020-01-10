import React from 'react';
import classes from './sidebar.module.css';

import { NavLink } from 'react-router-dom';

const sidebar = () => {
    return (
        <aside>
            <NavLink exact={true} activeClassName={classes.Active} to="/"><div></div></NavLink>
            <NavLink activeClassName={classes.Active} to="/about"><div></div></NavLink>
            <NavLink activeClassName={classes.Active} to="/skills"><div></div></NavLink>
            {/* <NavLink activeClassName={classes.Active} to="/feedback"><div></div></NavLink> */}
        </aside>
    )
}

export default sidebar;
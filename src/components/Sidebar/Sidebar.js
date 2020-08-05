import React from 'react';
import classes from './Sidebar.module.css';

import { NavLink } from 'react-router-dom';

import scrollAndPageFlip from '../../utils/PageFlipAndScrollTop';

import pointDownIcon from '../../assets/images/aside/point-down.svg';

const sidebar = () => {

    return (
        <aside>
            <div><img src={pointDownIcon} alt="Point down" /></div>
            <NavLink onClick={()=>scrollAndPageFlip()} exact={true} activeClassName={classes.Active} to="/"><div></div></NavLink>
            <NavLink onClick={()=>scrollAndPageFlip()} activeClassName={classes.Active} exact to="/about"><div></div></NavLink>
            <NavLink onClick={()=>scrollAndPageFlip()} activeClassName={classes.Active} exact to="/skills"><div></div></NavLink>
            <NavLink onClick={()=>scrollAndPageFlip()} activeClassName={classes.Active} exact to="/portfolio"><div></div></NavLink>
        </aside>
    )
    
}

export default sidebar;
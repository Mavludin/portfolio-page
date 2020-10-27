import React from 'react';
import classes from './Arrows.module.css'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { navigate } from '../../utils/projectFunctions';
import { navLinks } from '../../utils/projectData';
import { useHistory, useLocation } from 'react-router';

export const Arrows = () => {

  const nav = {
    history: useHistory(),
    location: useLocation()
  }

  return (
    <React.Fragment>
      <div 
        onClick={() => navigate(navLinks, nav, 'prev') } 
        className={`${classes.MobileNav} ${classes.PrevPage}`}>
        <NavigateBeforeIcon/>
      </div>
      <div 
        onClick={() => navigate(navLinks, nav, 'next') } 
        className={`${classes.MobileNav} ${classes.NextPage}`}>
        <NavigateNextIcon />
      </div>
    </React.Fragment>
  )
}
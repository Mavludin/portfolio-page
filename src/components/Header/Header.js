import React, { useState } from 'react';
import classes from './Header.module.css';
import '../../Main.css';

import { NavLink } from 'react-router-dom';

import {scrollAndPageFlipSound} from '../../utils/projectFunctions';
import { navLinks } from '../../utils/projectData';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: none;
    width: 100%;
    height: 60px;
    position: relative;
    padding: 20px;
    z-index: 3;

    & nav {
        transform: ${({isChecked}) => isChecked ? 'translateX(0%)' : 'translateX(-100%)'};
        opacity: ${({isChecked}) => isChecked ? '1' : '0'}
    }

    @media screen and (max-width: 836px) {

        & {
            display: block;
        }
    
    }
`

export const Header = () => {

    const [isChecked, setCheckBoxState] = useState(false);

    const onUpdateState = (e) => {
        setCheckBoxState(e.target.checked)
    }

    const renderedNavLinks = navLinks.map(item => {
        return (
            <li key={item.id}>
                <NavLink 
                    onClick={()=>{setCheckBoxState(false); scrollAndPageFlipSound();}} 
                    activeClassName={classes.Active} 
                    exact={true} 
                    to={item.reference}>{item.name}
                </NavLink>
            </li>
        )
    })

    return (
        <StyledHeader isChecked = {isChecked} >
            <div className={classes.HeaderContent}>

                <nav className={classes.HambMenu}>
                    <ul>
                        {renderedNavLinks}
                    </ul>
                </nav>

                <div className={classes.Hamb}>
                    <div className={classes.MenuBtn}>
                        <input 
                            checked={isChecked} 
                            onChange={onUpdateState} 
                            type="checkbox" 
                            id="menu_checkbox" 
                            className={classes.MenuCheckBox} 
                        />
                        <label htmlFor="menu_checkbox" className={classes.MenuLabel}>
                            <div className={classes.MenuTextBar}></div>
                        </label>
                    </div>
                </div>

            </div>
        </StyledHeader>
    )

}
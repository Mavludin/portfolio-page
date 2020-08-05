import React, { useState, useEffect } from 'react';
import classes from './header.module.css';
import '../../Main.css';

import { NavLink } from 'react-router-dom';

import scrollAndPageFlip from '../../utils/PageFlipAndScrollTop';
import { navLinks } from '../../utils/navLinksData';

const Header = () => {

    const checkBox = React.createRef();
    const hambMenu = React.createRef();

    const [isChecked, changeCheckboxState] = useState(false);

    const onUpdateState = (e) => {
        changeCheckboxState(e.target.checked)
    }

    useEffect(() => {

        if (isChecked) {
            hambMenu.current.style.transform = 'translateX(0%)';
            hambMenu.current.style.opacity = '1';
        }
        else {
            hambMenu.current.style.transform = 'translateX(-100%)';
            hambMenu.current.style.opacity = '0';
        }

    })

    const renderedNavLinks = navLinks.map(item => {
        return (
            <li key={item.id}>
                <NavLink 
                    onClick={()=>{changeCheckboxState(false); scrollAndPageFlip();}} 
                    activeClassName={classes.Active} 
                    exact={true} 
                    to={item.reference}>{item.name}
                </NavLink>
            </li>
        )
    })

    return (
        <header>
                <div className={[classes.HeaderContent].join(' ')}>

                <nav ref={hambMenu} className={classes.HambMenu}>
                    <ul>
                        {renderedNavLinks}
                    </ul>
                </nav>

                <div className={classes.Hamb}>
                    <div className={classes.MenuBtn}>
                        <input 
                            checked={isChecked} 
                            onChange={onUpdateState} 
                            ref={checkBox} 
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
        </header>
    )

}

export default Header;
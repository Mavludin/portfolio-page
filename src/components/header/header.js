import React from 'react';
import classes from './header.module.css';
import '../../Main.css';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    checkBox = React.createRef();
    hambMenu = React.createRef();

    state = {
        isChecked : false
    }

    onUpdateState = (e) => {
        this.setState({
            isChecked: e.target.checked
        })
    }

    componentDidUpdate() {

        if (this.state.isChecked) {
            this.hambMenu.current.style.transform = 'translateX(0%)';
            this.hambMenu.current.style.opacity = '1';
        }
        else {
            this.hambMenu.current.style.transform = 'translateX(-100%)';
            this.hambMenu.current.style.opacity = '0';

        }

    }

    render(){
        return (
            <header>
                 <div className={[classes.HeaderContent].join(' ')}>

                    <nav ref={this.hambMenu} className={classes.HambMenu}>
                        <ul>
                            <li><NavLink onClick={()=>this.setState({isChecked: false})} activeClassName={classes.Active} exact={true} to="/">Home</NavLink></li>
                            <li><NavLink onClick={()=>this.setState({isChecked: false})} activeClassName={classes.Active} exact to="/about">About Me</NavLink></li>
                            <li><NavLink onClick={()=>this.setState({isChecked: false})} activeClassName={classes.Active} exact to="/skills">My Skills</NavLink></li>
                            <li><NavLink onClick={()=>this.setState({isChecked: false})} activeClassName={classes.Active} exact to="/portfolio">Portfolio</NavLink></li>
                        </ul>
                    </nav>

                    <div onClick={this.toggleChecked} className={classes.Hamb}>
                        <div className={classes.MenuBtn}>
                            <input checked={this.state.isChecked} onChange={this.onUpdateState} ref={this.checkBox} type="checkbox" id="menu_checkbox" className={classes.MenuCheckBox} />
                            <label htmlFor="menu_checkbox" className={classes.MenuLabel}>
                                <div className={classes.MenuTextBar}></div>
                            </label>
                        </div>
                    </div>

                </div>
            </header>
        )
    }

}

export default Header;
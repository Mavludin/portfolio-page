import React from 'react';
import classes from './header.module.css';
import '../../Main.css';

class Header extends React.Component {

    checkBox = React.createRef();
    hambMenu = React.createRef();

    state = {
        isChecked : false
    }

    toggleChecked = () => {
        this.setState({isChecked: !this.state.isChecked});
    }

    componentDidMount() {
        this.checkBox.current.checked = this.state.isChecked;

        if (this.state.isChecked) {
            this.hambMenu.current.style.height = '200px';
            this.hambMenu.current.style.opacity = '1';
        }
        else {
            this.hambMenu.current.style.opacity = '0';
            this.hambMenu.current.style.height = '0';
        }
    }

    render(){
        return (
            <header>
                 <div className={classes.BotSection}>

                    <nav className={classes.TopMenu}>
                        <ul>
                            <li><a href="/">About Me</a></li>
                            <li><a href="/">My Skills</a></li>
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/">Contacts</a></li>
                        </ul>
                    </nav>

                    <nav ref={this.hambMenu} className={classes.HambMenu}>
                        <ul>
                            <li><a href="/">About Me</a></li>
                            <li><a href="/">My Skills</a></li>
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/">Contacts</a></li>
                        </ul>
                    </nav>

                    <div onClick={this.toggleChecked} className={classes.Hamb}>
                        <div className={classes.MenuBtn}>
                            <input ref={this.checkBox} type="checkbox" id="menu_checkbox" className={classes.MenuCheckBox} />
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
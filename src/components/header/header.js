import React from 'react';
import './header.css';

class Header extends React.Component {

    constructor() {
        super();

        this.checkBox = React.createRef();
        this.hambMenu = React.createRef();

        this.state = {
            isChecked : false
        }
    }

    toggleChecked = () => {
        this.setState({isChecked: !this.state.isChecked});
    }


    componentDidUpdate() {
        this.checkBox.current.checked = this.state.isChecked;

        if (this.state.isChecked) {
            this.hambMenu.current.style.transform = 'rotateY(0deg)';
        }
        else this.hambMenu.current.style.transform = 'rotateY(90deg)';
    }

    render() {



        return (
            <header>
                
                <div className="container">
    
                    <div className="header-content">

                        <div className="top-section">

                            <div className="logo">
                                <a href="/">Ben Dover</a>
                            </div>
                            <nav className="top-menu">
                                <ul>
                                    <li><a href="/">About Me</a></li>
                                    <li><a href="/">My Skills</a></li>
                                    <li><a href="/">My Projects</a></li>
                                    <li><a href="/">Contacts</a></li>
                                </ul>
                            </nav>

                            <nav ref={this.hambMenu} className="hamb-menu">
                                <ul>
                                    <li><a href="/">About Me</a></li>
                                    <li><a href="/">My Skills</a></li>
                                    <li><a href="/">My Projects</a></li>
                                    <li><a href="/">Contacts</a></li>
                                </ul>
                            </nav>

                            <div onClick={this.toggleChecked} className="hamb">
                                <div className="menu_button">
                                    <input ref={this.checkBox} type="checkbox" className="menu_checkbox" />
                                    <label htmlFor="menu_checkbox" className="menu_label">
                                        <div className="menu_text_bar"></div>
                                    </label>
                                </div>
                            </div>

                        </div>
    
                        <div className="mid-section">
                            <h1> A front-end developer crazy at pretty desing solutions </h1>
                        </div>
                        
                        <div className="bot-section">
                            <q> You do not get paid for knowledge, but for knowing how to bring it into life. </q>
                        </div>

                    </div>
    
                </div>
            </header>
        )
    }

}

export default Header;
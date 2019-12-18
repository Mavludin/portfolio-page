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
            this.hambMenu.current.style.height = '200px';
            this.hambMenu.current.style.opacity = '1';
        }
        else {
            this.hambMenu.current.style.opacity = '0';
            this.hambMenu.current.style.height = '0';
        }
    }

    render() {

        return (
            <header onScroll={(e)=>this.Scrolling(e)}>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                
                <div className="container">
    
                    <div className="header-content">

                        <div className="top-section">

                            <h1> Hello, I'm <span>Mavludin</span> <br/> A front-end web developer </h1>
                            <a className="getStarted" href="/">Get started <i className="fas fa-arrow-right"></i></a>

                        </div>
    
                        {/* <div className="bot-section"> */}

                            {/* <div className="logo">
                                <a href="/">Ben Dover</a>
                            </div> */}
                            {/* <nav className="top-menu">
                                <ul>
                                    <li><a href="/">About Me</a></li>
                                    <li><a href="/">My Skills</a></li>
                                    <li><a href="/">Portfolio</a></li>
                                    <li><a href="/">Contacts</a></li>
                                </ul>
                            </nav>

                            <nav ref={this.hambMenu} className="hamb-menu">
                                <ul>
                                    <li><a href="/">About Me</a></li>
                                    <li><a href="/">My Skills</a></li>
                                    <li><a href="/">Portfolio</a></li>
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
                            </div> */}

                        {/* </div> */}

                    </div>
    
                </div>
            </header>
        )
    }

}

export default Header;
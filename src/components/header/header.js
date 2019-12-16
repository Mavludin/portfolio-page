import React from 'react';
import './header.css';

class Header extends React.Component {

    constructor() {
        super();
        this.checkBox = React.createRef();
    }

    toggleChecked = () => {
        if (this.checkBox.current.checked) this.checkBox.current.checked = false;
        else this.checkBox.current.checked = true;
    }

    render() {

        return (
            <header>
                
                <div className="container">
    
                    <div className="top-header">
                        <div className="logo">
                            <a href="/">Ben Dover</a>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="/">About Me</a></li>
                                <li><a href="/">My Skills</a></li>
                                <li><a href="/">My Projects</a></li>
                                <li><a href="/">Contacts</a></li>
                            </ul>
                        </nav>
                        <div onClick={this.toggleChecked} className="webapp_cover">
                            <div className="menu_button">
                                <input ref={this.checkBox} type="checkbox" className="menu_checkbox" />
                                <label for="menu_checkbox" className="menu_label">
                                    <div className="menu_text_bar"></div>
                                </label>
                            </div>
                        </div>
                    </div>
    
                    <div className="mid-header">
                        <h1> A front-end developer for digital products </h1>
                    </div>
                    
                    <div className="bottom-header">
                        <q> You do not get paid for knowledge, but for knowing how to bring it into life. </q>
                    </div>
    
                </div>
            </header>
        )
    }

}

export default Header;
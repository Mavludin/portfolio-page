import React from 'react';
import classes from './footer.module.css';
import '../../Main.css';

const Footer = () => {
    return (
        <footer>
            <div className={[classes.Contacts]} >
                <a href="mailto:imevlud@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/mavludin-abdulkadirov-a7b037167/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Mavludin" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
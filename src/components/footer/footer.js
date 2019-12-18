import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper container">
                {/* <div className="social">
                    <a target="_blank" href="https://www.instagram.com/icukengw/"><i className="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com/_Bernheim"><i className="fab fa-twitter"></i></a>
                </div> */}

                <div className="contacts">
                    <a href="mailto:imevlud@gmail.com"><i className="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/mavludin-abdulkadirov-a7b037167/"><i className="fab fa-linkedin"></i></a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
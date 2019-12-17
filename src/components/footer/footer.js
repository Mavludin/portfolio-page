import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <h2>Stay in touch</h2>
            <div className="footer-wrapper container">
                <div className="social">
                    <a target="_blank" href="https://www.instagram.com/icukengw/"><i className="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com/_Bernheim"><i className="fab fa-twitter"></i></a>
                </div>

                <div className="contacts">
                    <a href="tel:+79286760256"><i className="fas fa-phone"></i> 79286760256</a>
                    <a href="mailto:imevlud@gmail.com"><i className="fas fa-envelope"></i> imevlud@gmail.com</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
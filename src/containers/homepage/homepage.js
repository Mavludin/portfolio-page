import React from 'react';

import classes from './homepage.module.css';
import '../../Main.css';

import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {

        return (
            <div className={[classes.HomePage, 'flex-content', 'Page'].join(' ')}>
                <h1> Hello, I'm <span>Mavludin</span> <br/> A front-end web developer </h1>
                <Link to="/about" className={classes.RedBtn} href="/">Get started <i className="fas fa-arrow-right"></i></Link>
            </div>
        )
    }

}
export default HomePage;
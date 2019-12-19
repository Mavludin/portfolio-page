import React from 'react';
import './sidebar.css';

import { Link } from 'react-router-dom';

const sidebar = () => {
    return (
        <aside>
            <Link to="/"><div className="activeWindow"></div></Link>
            <Link to="/about"><div></div></Link>
            <Link to="/skills"><div></div></Link>
            <Link to="/feedback"><div></div></Link>
        </aside>
    )
}

export default sidebar;
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Esavers</h1>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/risk-analysis">Risk Analysis</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

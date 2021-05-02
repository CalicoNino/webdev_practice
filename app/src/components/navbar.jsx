import React from 'react';
import logo from '../visuals/logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-red">
            <Link to='/' className="navbar-brand mx-auto">
                <h2 className="title-font">Brainstorm 
                <img src={logo} width="60" height="60" className="text-center mx-2" alt="logo"/>
                Tomatoes</h2>
            </Link>
        </nav>
    );
}

export default NavBar;
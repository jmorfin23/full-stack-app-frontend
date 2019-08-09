import React, {Component} from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

function Header()  {
    return (
    <header className="Header">
      <nav className="navbar navbar-light bg-light">
        <NavLink to='/' className="navbar-brand">Schedule</NavLink>
        <NavLink to='/events' className="navbar-brand">Events</NavLink>
      </nav>
    </header>
    );
  }


export default Header;

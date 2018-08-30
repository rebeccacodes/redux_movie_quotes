import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <nav className="blue">
                <div style={{ padding: '0 10px' }} className="nav-wrapper">
                    <Link to="/" className="brand-logo">Movie Quotes</Link>
                    <ul className="right">

                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/secret-list">SECRET LIST</Link></li>
                        <li><Link to="/movie-quote">MOVIE QUOTE</Link></li>
                        <li><Link to="/sign-up">SIGN UP</Link></li>
                        <button className="btn blue darken-2">Sign In</button>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Nav;
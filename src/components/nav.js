import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';



class Nav extends Component {

    renderLinks() {
        const { auth, signIn, signOut } = this.props;

        if (auth) {
            return (
                <Fragment>
                    <li><Link to="/secret-list">SECRET LIST</Link></li>
                    <li><Link to="/movie-quote">MOVIE QUOTE</Link></li>
                    <li><button onClick={signOut} className="btn orange darken-2">Sign Out</button></li>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <li><Link to="/sign-in">SIGN IN</Link></li>
                <li> <Link to="/sign-up">SIGN UP</Link>
                </li>
            </Fragment>
        )
    }

    render() {
        return (
            <nav className="blue">
                <div style={{ padding: '0 10px' }} className="nav-wrapper">
                    <Link to="/" className="brand-logo">Movie Quotes</Link>
                    <ul className="right">

                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>

                        {this.renderLinks()}
                    </ul>

                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signIn: signIn,
    signOut: signOut
})(Nav);
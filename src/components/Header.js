import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';



class Header extends Component {
    constructor(props) {
        super(props)
        this.auth = this.props.auth;
    }
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        return (
            <>
                <header className="site-header header fixed">
                    <div className="header-div">
                        <div className="content-div">
                            <nav className="nav navbar">
                                <div className="logo-div ">
                                    <h3><Link to="/">iReporter</Link></h3>
                                    <div className="nav-toggler-wrapper">
                                        <button type="button" className="nav-menu" onClick={this.handleToggle}>
                                            <FaAlignJustify className="nav-icon" />
                                        </button>
                                    </div>

                                </div>
                                <div className={this.state.isOpen ? "show-nav nav-links-div" : "nav-links-div"}>
                                    <ul>
                                        <li className="nav-links">
                                            {this.auth.isAuthenticated() ?
                                                <NavLink to="/dashboard" activeClassName="active-link" exact>Dashboard</NavLink>
                                                :
                                                <NavLink to="/auth/login" activeClassName="active-link" exact>Sign in</NavLink>}
                                        </li>
                                        {this.auth.isAuthenticated() && <li className="nav-links">
                                            <NavLink to="/profile" activeClassName="active-link" exact>Profile</NavLink>
                                        </li>}
                                        <li className="nav-links get-started">
                                            {this.auth.isAuthenticated() ?
                                                <button >Log out</button>
                                                :
                                                <NavLink to="/auth/sign-up" activeClassName="active-link" exact>Join Us</NavLink>}
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                </header>
            </>
        )
    }
}

export default Header

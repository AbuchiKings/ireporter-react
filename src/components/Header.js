import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';



class Header extends Component {

    handleToggle = () => { }


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
                                        <NavLink to="/auth/login" activeClassName="active" exact>Get Started</NavLink>
                                    </div>

                                </div>
                                <div className="nav-links-div">
                                    <ul>
                                        <li className="nav-links">
                                            <NavLink to="/auth/login" activeClassName="active" exact>Sign in</NavLink>
                                        </li>
                                        <li className="nav-links get-started">
                                            <NavLink to="/auth/login" activeClassName="active" exact>Get Started</NavLink>
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

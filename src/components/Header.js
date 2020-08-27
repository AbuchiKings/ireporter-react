import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';



class Header extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
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
                                            <NavLink to="/auth/login" activeClassName="active" exact>Sign in</NavLink>
                                        </li>
                                        <li className="nav-links get-started">
                                            <NavLink to="/auth/sign-up" activeClassName="active" exact>Join Us</NavLink>
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

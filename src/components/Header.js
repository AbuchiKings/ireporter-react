import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <>
                <header className="site-header header fixed">
                <div className="header-div">
                    <div className="content-div">
                        <nav className="nav navbar">
                            <div className="logo-div">
                                <a href="">iReporter</a>
                            </div>
                            <div className="navigation">
                                <p>Here</p>
                                <p>Here</p>
                                <p>Here</p>
                                <p>Here</p>
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

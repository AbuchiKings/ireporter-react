import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SideNav({ links, sideNav }) {
    return (
        <div className={sideNav ? "aside-nav closed" : "aside-nav"}>
            <div className="side-navigation">

                {links.map(link => {
                    return (
                        <div key={link.name} className="side-links-grp">
                            <NavLink to={link.link} activeClassName="active" exact>{link.name}</NavLink>
                        </div>
                    )
                })}

            </div>
            <div className="support">
                <h3>Support</h3>
            </div>
        </div>
    )
}

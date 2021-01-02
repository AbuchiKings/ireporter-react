import React from 'react';
import ProfileDetails from '../components/ProfileDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideNav from './../components/SideNav';



export default function Profile({ location, user, history }) {
    const links = [
        {
            name: 'Personal Information',
            link: '/profile/details'
        },
        {
            name: 'Change Password',
            link: '/profile/change-password'
        },
        {
            name: 'Report Statistics',
            link: '/profile/stats'
        },
    ];
    const { pathname } = location;

    return (
        <main className="profile-main">
            <div className="div-middle">
                <SideNav links={links} />
                <div className="main-content" >

                    <div className="profile-header-div">
                        {(() => {
                            if (pathname === "/profile/details") {
                                return (
                                    <>
                                        <h1>Personal Information</h1>
                                        <p className="extra">Update your profile information.</p>
                                    </>
                                )
                            } else if (pathname === "/profile/change-password") {
                                return (
                                    <>
                                        <h1>Change Password</h1>
                                        <p className="extra">Update your password.</p>
                                    </>
                                )
                            } else if (pathname === "/profile/stats") {
                                return (
                                    <>
                                        <h1>Report Statistics</h1>
                                    </>
                                )
                            }
                        })()}

                    </div>
                    <Switch>
                        <Route exact path="/profile/details" render={() => (
                            <ProfileDetails />
                        )} />
                        <Redirect from="/profile" to="/profile/details" />
                    </Switch>
                </div>

            </div>
        </main>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

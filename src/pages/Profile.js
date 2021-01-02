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
            name: 'Report Stata',
            link: '/profile/stats'
        },
    ];
    return (
        <main className="profile-main">
            <div className="div-middle">
                <SideNav links={links} />
                <div className="main-content" >

                    <div className="profile-header-div">
                        <h1>Personal Information</h1>
                        <p className="extra">Update your profile information.</p>
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

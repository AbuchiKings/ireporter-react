import React from 'react';
import ProfileDetails from '../components/ProfileDetails';
import { Switch, Route, Redirect } from 'react-router-dom';



export default function Profile({ location, user, history }) {
    return (
        <main className="profile-main">
            <div className="div-middle">
                <div className="aside-nav">
                    <h2>Aside</h2>
                </div>
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

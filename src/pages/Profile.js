import React, { useState, useEffect } from 'react';
import ProfileDetails from '../components/ProfileDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideNav from './../components/SideNav';
import ChangePassword from './../components/ChangePassword';
import ReportStat from './../components/ReportStat';
import { connect } from 'react-redux';
import * as userActions from '../redux/actions/userActions';
import { bindActionCreators } from 'redux';


function Profile({ location, actions,...props }) {
    const { loadUser } = actions;
    const [user, setUser] = useState({ ...props.user });
    useEffect(() => {
        console.log('worked')
        if ( user.registered === undefined) {
            loadUser().catch(error => console.log(error));
            setUser((prev => (
                { ...prev, ...props.user }
            )));
        }
    }, [props.user, user.registered, loadUser])
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
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState({value: "Edit", saving:false});
    const [inputClass, setInputClass] = useState("");

    const handleToggle = (e) => {
        e.preventDefault();
        console.log(e.target.disabled);
        if (e.target.textContent === "Edit") {
            setButtonText({value: "Save"})
            setInputClass("active-input")
        }

        else if (e.target.textContent === "Save") {
            setButtonText({value:"Saving...", saving: true});
            setInputClass(" ")

        } else { }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

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
                            user?.firstname?.length > 1 && <ProfileDetails user={user} errors={errors} onChange={handleChange}
                                handleToggle={handleToggle} buttonText={buttonText.value} inputClass={inputClass} disabled={buttonText.saving} />
                        )} />
                        <Route exact path="/profile/change-password" render={() => (
                            <ChangePassword />
                        )} />
                        <Route exact path="/profile/stats" render={() => (
                            <ReportStat />
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


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

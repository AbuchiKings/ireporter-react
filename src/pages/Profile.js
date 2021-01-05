import React, { useState } from 'react';
import ProfileDetails from '../components/ProfileDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideNav from './../components/SideNav';
import ChangePassword from './../components/ChangePassword';
import ReportStat from './../components/ReportStat';
import { connect } from 'react-redux';



function Profile({ location, user, history }) {
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
    const [userDetails, setDetails] = useState({ ...user });
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState("Edit");
    const [inputClass, setInputClass] = useState("");

    const handleToggle = (e) => {
        e.preventDefault();
        console.log(e.target.disabled);
        if (e.target.textContent === "Edit") {
            setButtonText("Save")
            setInputClass("active-input")
        }

        else if (e.target.textContent === "Save") {
            setButtonText("Saving...");
            e.target.disabled = true;

        } else {

        }

    }

    function handleChange(event) {
        const { name, value } = event;
        setDetails(prev => ({
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
                            <ProfileDetails user={userDetails} errors={errors} onChange={handleChange}
                                handleToggle={handleToggle} buttonText={buttonText} inputClass={inputClass} />
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

export default connect(mapStateToProps)(Profile)

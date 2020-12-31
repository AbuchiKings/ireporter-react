import React from 'react';
import boyImg from '../images/boy-with-book.jpg'


export default function Profile() {
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

                    <div className="profile-details-div">
                        <div>
                            <div className="details-label">
                                <h6>Profile picture</h6>
                                <button className="extra label-button"> Choose a new profile picture</button>
                            </div>

                            <div className="details dp-div">
                                <img src={boyImg} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="details-label">
                                <label htmlFor="firstname">Firstname</label>
                                <button className="extra label-button">Change first name</button>

                            </div>

                            <div className="details">
                                <input type="text" name="firstname" id="" value="Abuchi" className="profile-input"/>
                            </div>
                        </div>
                        <div>
                            <div className="details-label">
                                <label htmlFor="lastname">Lastname</label>
                                <button className="extra label-button">Change last name</button>

                            </div>

                            <div className="details">
                                <input type="text" name="lastname" id="" value="Ndinigwe"/>
                            </div>
                        </div>
                        <div>
                            <div className="details-label">
                                <label htmlFor="email">Email</label>
                                <button className="extra label-button">Change email address</button>

                            </div>

                            <div className="details">
                                <input type="email"
                                    aria-label="email" name="email" id="email" value="abuchikingsley76@gmail.com"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="details-label">
                                <label htmlFor="phone-number">Phone number</label>
                                <button className="extra label-button"> Change phone number</button>
                            </div>

                            <div className="details">
                                <input type="text" aria-label="phone-number" name="phone_number" id="phone-number" value="+2348062158380" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

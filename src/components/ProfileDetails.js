import React from 'react'
import boyImg from '../images/boy-with-book.jpg'

export default function ProfileDetails() {
    return (
        <form action="" className="form-content" noValidate>
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
                        <input type="text" name="firstname" value="Abuchi" className="profile-input" />
                    </div>
                </div>

                <div>
                    <div className="details-label">
                        <label htmlFor="lastname">Lastname</label>
                        <button className="extra label-button">Change last name</button>

                    </div>

                    <div className="details">
                        <input type="text" name="lastname" id="lastname" value="Ndinigwe" />
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
                
                <div className="btn-top-div">
                    <div className="details btn-div">
                        <button type="submit" className="btn btn-primary profile-edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

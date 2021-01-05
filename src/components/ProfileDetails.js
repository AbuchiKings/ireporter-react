import React from 'react'
import boyImg from '../images/boy-with-book.jpg'
import TextInput from './TextInput';

export default function ProfileDetails({ user, errors, onChange, handleToggle, buttonText, inputClass }) {
    return (
        <form action="" className="form-content" noValidate>
            <div className="profile-details-div">

                <div>
                    <div className="details-label">
                        <label>Profile picture</label>
                        <button className="extra label-button"> Choose a new profile picture</button>
                    </div>

                    <div className="details dp-div">
                        <img src={boyImg} alt="" />
                    </div>
                </div>

                <TextInput name="firstname" label="Firstname" value={user.firstname}
                    type="text" error={errors.firstname} text="Change first name" onChange={onChange} inputClass={inputClass} />

                <TextInput name="lastname" label="Lastname" value={user.lastname}
                    type="text" error={errors.lastname} text="Change last name" onChange={onChange} inputClass={inputClass} />

                <TextInput name="email" label="Email" value={user.email}
                    type="email" error={errors.email} text="Change email address" onChange={onChange} inputClass={inputClass} />

                <TextInput name="phone_number" label="Phone number" value={user.phone_number}
                    type="text" error={errors.phone_number} text="Change phone number" onChange={onChange} inputClass={inputClass} />

                <div className="btn-top-div">
                    <div className="details btn-div">
                        <button type="submit" className="btn btn-primary profile-edit-btn" onClick={handleToggle}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

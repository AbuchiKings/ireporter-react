import React from 'react'
import boyImg from '../images/boy-with-book.jpg'
import TextInput from './TextInput';

export default function ProfileDetails({ user, errors, onChange, handleToggle, buttonText, inputClass, disabled }) {
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

                <TextInput name="firstname" label="Firstname" data={user.firstname}
                    type="text" error={errors.firstname} text="Change first name" onChange={onChange} inputClass={inputClass} />

                <TextInput name="lastname" label="Lastname" data={user.lastname}
                    type="text" error={errors.lastname} text="Change last name" onChange={onChange} inputClass={inputClass} />

                <TextInput name="email" label="Email" data={user.email}
                    type="email" error={errors.email} text="Change email address" onChange={onChange} inputClass={inputClass} />

                <TextInput name="phone_number" label="Phone number" data={user.phone_number}
                    type="text" error={errors.phone_number} text="Change phone number" onChange={onChange} inputClass={inputClass} />

                <div className="btn-top-div">
                    <div className="details btn-div">
                        <button type="submit" className="btn btn-primary profile-edit-btn"
                            onClick={handleToggle} disabled={disabled}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

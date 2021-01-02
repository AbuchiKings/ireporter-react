import React from 'react'

export default function ChangePassword() {
    return (
        <form action="" className="form-content" noValidate>
            <div className="change-password-top">

                <div>
                    <div className="input-label-div">
                        <label htmlFor="oldPassword">Old Password</label>
                        <button className="extra label-button">Enter old password</button>
                    </div>

                    <div className="input-div">
                        <input type="password" className="active-input"
                            aria-label="OldPassword" name="oldPassword" id="oldpassword" 
                        />
                    </div>
                </div>

                <div>
                    <div className="input-label-div">
                        <label htmlFor="newPassword">New Password</label>
                        <button className="extra label-button">Enter new password</button>
                    </div>

                    <div className="input-div">
                        <input type="password" className="active-input"
                            aria-label="new password" name="newPassword" id="newPassword" />
                    </div>
                </div>

                <div className="btn-top-div">
                    <div className=" btn-div">
                        <button type="submit" className="btn btn-primary profile-edit-btn">Change Password</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

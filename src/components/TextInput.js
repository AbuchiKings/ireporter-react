import React from "react";

const TextInput = ({ name, label, onChange, value, type, text, error }) => {
    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " " + "has-error";
    }

    return (
        <div>
            <div className="details-label">
                <label htmlFor={name}>{label}</label>
                <button className="extra label-button">{text}</button>

            </div>

            <div className="details">
                <input aria-label={name} type={type} name={name} value={value} className="profile-input" onChange={onChange} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>

    );
};

export default TextInput;

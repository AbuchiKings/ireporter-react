import React from "react";

const TextInput = ({ name, label, onChange, data, type, text, error, inputClass }) => {
    // let wrapperClass = "form-group";
    // if (error && error.length > 0) {
    //     wrapperClass += " " + "has-error";
    // }

    return (
        <div>
            <div className="details-label">
                <label htmlFor={name}>{label}</label>
                <button className="extra label-button">{text}</button>

            </div>

            <div className="details">
                <input aria-label={name} type={type} name={name} value={data} className={inputClass} onChange={onChange}  />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>

    );
};

export default TextInput;

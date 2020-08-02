import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
    return (
        <div className="section-title">
            <h4>{title}</h4>
            
        </div>
    )
}
Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;

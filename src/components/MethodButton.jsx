import React from 'react';
import styles from '../styles/MethodButton.module.css';
import PropTypes from 'prop-types';

function MethodButton({ selected, method, handleChange }) {
    return (
        <button
            className={
                selected === method
                    ? styles['selected']
                    : styles['not-selected']
            }
            value={method}
            onClick={(e) => handleChange(e, 'method')}
        >
            {method}
        </button>
    );
}

MethodButton.propTypes = {
    selected: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default MethodButton;

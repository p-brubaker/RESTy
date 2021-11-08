import React from 'react';
import styles from '../styles/ParamsItem.module.css';
import PropTypes from 'prop-types';

function ParamsItem() {
    const { key, value, handleRemoveParam } = this.props;
    return (
        <div className={styles['params-item']}>
            <button onClick={handleRemoveParam(key)}>X</button>
            <p>
                key: {key} value: {value}
            </p>
        </div>
    );
}

ParamsItem.propTypes = {
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleRemoveParam: PropTypes.func.isRequired,
};

export default ParamsItem;

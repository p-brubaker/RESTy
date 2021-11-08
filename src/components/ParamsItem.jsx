import React from 'react';
import styles from '../styles/ParamsItem.module.css';
import PropTypes from 'prop-types';

function ParamsItem(props) {
    const { pair, handleRemoveParam } = props;
    return (
        <div className={styles['params-item']}>
            <button onClick={() => handleRemoveParam(pair.key)}>X</button>
            <p>
                key: {pair.key} value: {pair.value}
            </p>
        </div>
    );
}

ParamsItem.propTypes = {
    pair: PropTypes.object.isRequired,
    handleRemoveParam: PropTypes.func.isRequired,
};

export default ParamsItem;

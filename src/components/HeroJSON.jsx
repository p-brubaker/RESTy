import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/HeroJSON.module.css';

function HeroJSON({ response }) {
    return (
        <div className={styles['hero-json-container']}>
            <p>{response}</p>
        </div>
    );
}

HeroJSON.propTypes = {
    response: PropTypes.string.isRequired,
};

export default HeroJSON;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/HeroJSON.module.css';
import ReactJson from 'react-json-view';

function HeroJSON({ response }) {
    return (
        <div className={styles['hero-json-container']}>
            <ReactJson src={response} />
        </div>
    );
}

HeroJSON.propTypes = {
    response: PropTypes.object.isRequired,
};

export default HeroJSON;

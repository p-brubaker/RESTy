import React, { Component } from 'react';
import ParamsItem from '../ParamsItem';
import PropTypes from 'prop-types';
import styles from '../../styles/ParamsContainer.module.css';

class ParamsContainer extends Component {
    state = {
        key: '',
        value: '',
    };

    handleChange(e, field) {
        this.setState({ [field]: e.target.value });
    }

    render() {
        const { key, value } = this.state;
        const { handleAddParams, handleRemoveParam, params } = this.props;

        return (
            <div className={styles['params-container']}>
                <button onClick={handleAddParams(key, value)}>ADD</button>
                <label htmlFor="key">key:</label>
                <input
                    id="key"
                    name="key"
                    value={key}
                    onChange={(e) => this.handleChange(e, 'key')}
                />
                <label htmlFor="value">value:</label>
                <input
                    id="value"
                    name="value"
                    value={value}
                    onChange={(e) => this.handleChange(e, 'value')}
                />
                {params ? (
                    params.map((pair) => (
                        <ParamsItem
                            params={pair}
                            key={params.key}
                            handleRemoveParam={handleRemoveParam}
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
        );
    }
}

ParamsContainer.propTypes = {
    handleAddParams: PropTypes.func.isRequired,
    handleRemoveParam: PropTypes.func.isRequired,
    params: PropTypes.object,
};

export default ParamsContainer;

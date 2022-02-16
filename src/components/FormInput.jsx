import React from 'react';
import styles from '../styles/FormInput.module.css';
import PropTypes from 'prop-types';
import ParamsContainer from '../containers/ParamsContainer';
import MethodButton from './MethodButton';

function FormInput(props) {
    const {
        method,
        url,
        body,
        token,
        params,
        handleSubmit,
        handleChange,
        handleAddParams,
        handleRemoveParam,
    } = props;

    return (
        <div className={styles['form-input-container']}>
            <label htmlFor="method-select">Method</label>
            <div name="method-select">
                {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((str) => {
                    return (
                        <MethodButton
                            key={str}
                            handleChange={handleChange}
                            selected={method}
                            method={str}
                        />
                    );
                })}
            </div>
            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <label htmlFor="url">URL</label>
                <input
                    name="url"
                    type="text"
                    value={url}
                    onChange={(e) => handleChange(e, 'url')}
                />
                <label htmlFor="raw-json-body">Raw JSON body</label>
                <textarea
                    type="text"
                    name="raw-json-body"
                    value={body}
                    onChange={(e) => handleChange(e, 'body')}
                />
                <label htmlFor="token-input">token:</label>
                <input
                    name="token-input"
                    value={token}
                    onChange={(e) => handleChange(e, 'token')}
                />
                <button type="submit">Submit</button>
            </form>
            <ParamsContainer
                handleRemoveParam={handleRemoveParam}
                handleAddParams={handleAddParams}
                params={params}
            />
        </div>
    );
}

FormInput.propTypes = {
    method: PropTypes.string,
    body: PropTypes.string,
    token: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.array.isRequired,
    handleRemoveParam: PropTypes.func.isRequired,
    handleAddParams: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default FormInput;

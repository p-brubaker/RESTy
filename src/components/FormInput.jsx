import React from 'react';
import styles from '../styles/FormInput.module.css';
import PropTypes from 'prop-types';
import ParamsContainer from './containers/ParamsContainer';

function FormInput(props) {
    const {
        method,
        url,
        body,
        token,
        handleSubmit,
        handleChange,
        handleAddParams,
        handleRemoveParam,
    } = props;

    return (
        <div className={styles['form-input-container']}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="url">URL</label>
                <input
                    id="url"
                    name="url"
                    type="text"
                    value={url}
                    onChange={(e) => handleChange(e, 'url')}
                />
                <label htmlFor="method">Method</label>
                <div name="method">
                    <button
                        style={
                            method === 'GET'
                                ? styles['selected']
                                : styles['not-selected']
                        }
                        value="GET"
                        onClick={(e) => handleChange(e, 'method')}
                    >
                        GET
                    </button>
                    <button
                        value="POST"
                        onClick={(e) => handleChange(e, 'method')}
                        style={
                            method === 'POST'
                                ? styles['selected']
                                : styles['not-selected']
                        }
                    >
                        POST
                    </button>
                    <button
                        value="PUT"
                        onClick={(e) => handleChange(e, 'method')}
                        style={
                            method === 'PUT'
                                ? styles['selected']
                                : styles['not-selected']
                        }
                    >
                        PUT
                    </button>
                    <button
                        value="PATCH"
                        onClick={(e) => handleChange(e, 'method')}
                        style={
                            method === 'PATCH'
                                ? styles['selected']
                                : styles['not-selected']
                        }
                    >
                        PATCH
                    </button>
                    <button
                        value="DELETE"
                        onClick={(e) => handleChange(e, 'method')}
                        style={
                            method === 'DELETE'
                                ? styles['selected']
                                : styles['not-selected']
                        }
                    >
                        DELETE
                    </button>
                </div>
                <label htmlFor="raw-json-body">Raw JSON body</label>
                <input
                    type="text"
                    name="raw-json-body"
                    value={body}
                    onChange={(e) => handleChange(e, 'body')}
                />
                <label
                    htmlFor="token-input"
                    value={token}
                    onChange={(e) => handleChange(e, 'token')}
                />
            </form>
            <ParamsContainer
                handleRemoveParam={handleRemoveParam}
                handleAddParams={handleAddParams}
            />
        </div>
    );
}

FormInput.propTypes = {
    method: PropTypes.string,
    body: PropTypes.string,
    token: PropTypes.string,
    url: PropTypes.string,
    handleRemoveParam: PropTypes.func.isRequired,
    handleAddParams: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default FormInput;

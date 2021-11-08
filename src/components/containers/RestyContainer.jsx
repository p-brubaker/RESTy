import React, { Component } from 'react';
import HistorySidebar from '../HistorySidebar';
import FormInput from '../FormInput';
import HeroJSON from '../HeroJSON';
import fetchRequest from '../../fetchUtils';

import styles from '../../styles/RestyContainer.module.css';

class RestyContainer extends Component {
    state = {
        url: '',
        body: '',
        response: {},
        method: 'GET',
        params: [],
        token: '',
    };

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { url, body, method, params, token } = this.state;
        const optional = {};
        if (body) optional.body = body;
        if (token) optional.token = token;
        if (params)
            optional.params = params.map((pair) => {
                return [pair.key, pair.value];
            });
        const json = await fetchRequest({ url, method, ...optional });
        this.setState({ response: json });
    };

    handleAddParams = (key, value) => {
        this.setState((prev) => ({
            params: [...prev.params, { key, value }],
        }));
    };

    handleRemoveParam = (key) => {
        this.setState((prev) => ({
            params: [...prev.params.filter((pair) => pair.key !== key)],
        }));
    };

    render() {
        const { url, method, body, response, token, params } = this.state;
        return (
            <div className={styles['resty-container']}>
                <HistorySidebar />
                <section className="right-section">
                    <FormInput
                        method={method}
                        url={url}
                        body={body}
                        token={token}
                        params={params}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        handleAddParams={this.handleAddParams}
                        handleRemoveParam={this.handleRemoveParam}
                    />
                    <HeroJSON response={response} />
                </section>
            </div>
        );
    }
}

export default RestyContainer;

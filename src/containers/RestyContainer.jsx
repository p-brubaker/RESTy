import React, { Component } from 'react';
import History from '../components/History';
import FormInput from '../components/FormInput';
import HeroJSON from '../components/HeroJSON';
import fetchRequest from '../services/fetchUtils';
import historyApi from '../services/historyApi';

import styles from '../styles/RestyContainer.module.css';

class RestyContainer extends Component {
    state = {
        history: [],
        url: '',
        body: '',
        response: {},
        method: 'GET',
        params: [],
        token: '',
    };

    componentDidMount() {
        this.setState({ history: historyApi.get() || [] });
    }

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { history, url, body, method, params, token } = this.state;

        const optional = {};
        if (body) optional.body = body;
        if (token) optional.token = token;
        if (params)
            optional.params = params.map((pair) => {
                return [pair.key, pair.value];
            });

        const json = await fetchRequest({ url, method, ...optional });
        this.setState({ response: json });

        if (!historyApi.has(method, url)) {
            const newHistory = [...history, { url, method }];
            this.setState({ history: newHistory });
            historyApi.set(newHistory);
        }
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

    handleGetHistoryItem = (index) => {
        const historyItem = historyApi.choose(index);
        this.setState({ url: historyItem.url, method: historyItem.method });
    };

    render() {
        const { history, url, method, body, response, token, params } =
            this.state;
        return (
            <div className={styles['resty-container']}>
                <section className={styles['history']}>
                    <History
                        history={history}
                        handleGetHistoryItem={this.handleGetHistoryItem}
                    />
                </section>
                <section className="right-section">
                    <FormInput
                        history={history}
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

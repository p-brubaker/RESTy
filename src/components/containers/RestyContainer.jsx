import React, { Component } from 'react';
import HistorySidebar from '../HistorySidebar';
import FormInput from '../FormInput';
import HeroJSON from '../HeroJSON';

import styles from '../../styles/RestyContainer.module.css';

class RestyContainer extends Component {
    state = {
        url: '',
        method: 'GET',
        rawJSONBody: '',
        res: '',
    };

    render() {
        return (
            <div className={styles['resty-container']}>
                <HistorySidebar />
                <section className="right-section">
                    <FormInput />
                    <HeroJSON />
                </section>
            </div>
        );
    }
}

export default RestyContainer;

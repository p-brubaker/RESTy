import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';

function History({ history, handleGetHistoryItem }) {
    return (
        <>
            {history ? (
                history.map((item, index) => {
                    return (
                        <HistoryItem
                            key={item.method + item.url}
                            url={item.url}
                            method={item.method}
                            index={index}
                            handleClick={handleGetHistoryItem}
                        />
                    );
                })
            ) : (
                <></>
            )}
        </>
    );
}

History.propTypes = {
    handleGetHistoryItem: PropTypes.func.isRequired,
    history: PropTypes.array,
};

export default History;

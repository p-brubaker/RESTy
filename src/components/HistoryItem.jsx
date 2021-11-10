import React from 'react';
import PropTypes from 'prop-types';

function HistoryItem(props) {
    const { url, method, index, handleClick } = props;
    return (
        <div onClick={() => handleClick(index)}>
            <p>{method}</p>
            <p>{url}</p>
        </div>
    );
}

HistoryItem.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    params: PropTypes.array,
    handleClick: PropTypes.func.isRequired,
};

export default HistoryItem;

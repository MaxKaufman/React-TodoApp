import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
    const searchText = 'Type to search';
    const searchStyle = {
        fontSize: '18px'
    };

    return <input
        placeholder={searchText}
        style={searchStyle}
        className='search-inp'
    />
};

export default SearchPanel;

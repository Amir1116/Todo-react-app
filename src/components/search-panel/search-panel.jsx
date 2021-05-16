import React from 'react';
import './search-panel-style.scss';

const SearchPanel = ({placeholder}) => {
    return (
        <input className="form-control" placeholder={placeholder}/>
    );

}

export default SearchPanel;
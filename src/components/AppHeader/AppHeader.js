import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
    return (
        <header className='header'>
            <h1 className='title'>My Todo List</h1>
            <h2 className='stat'>
                <div className='stat__todo'>1 осталось,</div>
                <div className='stat__done'>3 сделано</div>
            </h2>
        </header>
    )
};

export default AppHeader;

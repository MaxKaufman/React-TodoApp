import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import './App.css';

const App = () => {
    const todoData = [
        {label: 'Drink some coffee', important: false, id: 1},
        {label: 'Make App', important: true, id: 2},
        {label: 'Take some rest', important: true, id: 3}
    ];
    return (
        <>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </>
    );
};


export default App;
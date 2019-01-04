import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const todoItems = ['Learn React', 'Build awesome app'];

const App = () => {
    const isLoggedIn = true;
    const loginBox = <span>Login please</span>;
    const welcomeBox = <span>Welcome back</span>;

    return (
        <>
            { isLoggedIn ? welcomeBox : loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
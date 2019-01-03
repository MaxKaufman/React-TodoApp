import React from 'react';
import ReactDOM from 'react-dom';

const todoItems = ['Learn React', 'Build awesome app'];

const AppHeader = () => {
    return <h1>My Todho
        List</h1>
};

const SearchPanel = () => {
    const searchText = 'Type to search';
    const searchStyle = {
        fontSize: '18px'
    };

    return <input
        placeholder={searchText}
        style={searchStyle}
        disabled
    />

};

const TodoList = () => {
    return (
        <ul>
            <li>{ todoItems[0] }</li>
            <li>{ todoItems[1] }</li>
        </ul>
    );
};

const App = () => {
    const isLoggedIn = true;
    const loginBox = <span>Login please</span>;
    const welcomeBox = <span>Welcome back</span>;

    return (
        <>
            { isLoggedIn ? welcomeBox : loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList items={['item1', 'item2']} />
        </>
    );
};

//const el = <App />;

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {

    return (
        <ul>
            <li>
                <TodoListItem label='Drink Coffee' />

            </li>
            <li>
                <TodoListItem label='Make perfect App'
                              important
                />
            </li>
        </ul>
    );
};

export default TodoList;
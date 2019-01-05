import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({todos}) => {
    const Els = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={item.id} className='list-group__item'>
               {/* <TodoListItem
                    label={item.label}
                    important={item.important}
                />*/}
                <TodoListItem {...itemProps} />
            </li>
        )
    });

    return (
        <ul className='listGroup todo-list'>
            {Els}
        </ul>
    );
};

export default TodoList;
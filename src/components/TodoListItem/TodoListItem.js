import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {


    render() {

        const {label, important} = this.props;

        const style = {
            color: important ? 'tomato' : 'rgb(225,225,225)'
        };

        return <span style={style}> {label} </span>;
    }
}

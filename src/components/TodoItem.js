import React from 'react'
// import {  } from 'react-icons/io'

import doneIcon from '../done.svg';
import deleleteIcon from '../delete.svg';

class TodoItem extends React.Component {
    render() {
        const { text, done, handleDone, handleDelete } = this.props;

        let classDone = done ? 'done' : 'undone';

        return (
            <li>
                <div className="itemContainer">
                    <div className={classDone}>
                        <span> {text} </span>
                        <span className="icons">
                            <img src={doneIcon} className="App-logo" alt="done" onClick={handleDone} />
                            <img src={deleleteIcon} className="App-logo" alt="delete" onClick={handleDelete} />
                        </span>
                    </div>
                </div>
            </li>

        );
    }
}

export default TodoItem
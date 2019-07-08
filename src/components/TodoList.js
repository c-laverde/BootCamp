import React from 'react'
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        const { tasks, handleDone,  handleDelete } = this.props;

        return (
            <div className="tasksContainer">
                <h3>-- Todo List  --</h3>
                <ul>
                    {tasks.map((task) => {
                        return (
                            <TodoItem
                                key={task.id}
                                text={task.text}
                                done={task.done}
                                handleDone={() => handleDone(task.id)}
                                handleDelete={() => handleDelete(task.id)}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList
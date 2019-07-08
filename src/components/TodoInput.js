import React from 'react';

class TodoInput extends React.Component {
    render() {
        const { task, handleChange, handleSubmit } = this.props;
        return (
            <div className="inputForm">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Task..."
                        value={task}
                        onChange={handleChange} />

                    <button
                        type="submit"
                        disabled={task ? false : true}
                    >
                        Add task
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput
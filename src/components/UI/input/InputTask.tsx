import React, { useState } from 'react';

const InputTask = (props: any) => {
    const [newTask, setNewTask] = useState('') as any;

    const addNewTask = (event: any) => {
        event.preventDefault()
        props.setTasks(props.tasks.concat([{ id: props.tasks.length, name: newTask, isCompleted: false }]))

        setNewTask('')
    }
    return (
        <form className='top-form'>
            <select className='select'></select>
            <input
                type="text"
                className='input'
                placeholder={props.placeholder}
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
            ></input>
            <button className={'set-task-button' + (newTask ? 'on' : '')} onClick={addNewTask}>Add task</button>
        </form>
    );
};

export default InputTask;
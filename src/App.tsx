
import React, { useState } from 'react';
import Tasker from './components/Tasker';
import InputTask from './components/UI/input/InputTask';
import './styles/styles.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 0, name: 'Тестовое задание', isCompleted: false },
    { id: 1, name: 'Прекрасный код', isCompleted: false },
    { id: 2, name: 'Покрытие тестами', isCompleted: false }
  ]) as any;
  const [filter, setFilter] = useState({ sort: false, isFilter: false }) as any;

  let sortedTasks = (() => {
    if (filter.isFilter) {
      return [...tasks].filter(task => task.isCompleted === filter.sort)
    }
    return tasks
  })()

  const clearCompleted = () => setTasks(
    [...tasks].filter(t => !t.isCompleted)
      .map((task, i) => {
        return { ...task, id: i }
      }))
  return (
    <div className="App">
      <h1>todos</h1>
      <div className='container'>

        <InputTask placeholder='What needs to be done?' tasks={tasks} setTasks={setTasks} />
        <Tasker tasks={tasks} sortedTasks={sortedTasks} setTasks={setTasks} />
        <div className='bottom-panel'>
          <p>{tasks.filter((task: any) => !task.isCompleted).length} items left</p>
          <div className='bottom-panel-select'>
            <input type='radio'
              name='switch'
              onChange={() => setFilter({ sort: false, isFilter: false })}
            ></input>All
            <input type='radio'
              name='switch'
              onChange={() => setFilter({ sort: false, isFilter: true })}
            ></input>Active
            <input type='radio'
              name='switch'
              onChange={() => setFilter({ sort: true, isFilter: true })}
            ></input>Completed
          </div>
          <button className='clear-completed-button' onClick={clearCompleted}>Clear completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;

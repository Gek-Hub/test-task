import React from 'react';
import FinishTaskButton from './UI/button/FinishTaskButton';

const Tasker = (props: any) => {

  return (
    <div className='tasks'>
      {props.sortedTasks.map((task: any) => {
        return (
          <div className="task-container" key={task.id}>
            <FinishTaskButton tasks={props.tasks} setTasks={props.setTasks} index={task.id} />
            <div className={'td-off' + (task.isCompleted ? ' td-on' : '')}>{task.name}</div>
          </div>
        )
      }
      )}

    </div>
  );
};

export default Tasker;
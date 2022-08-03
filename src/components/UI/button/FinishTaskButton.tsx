import React from 'react';

const FinishTaskButton = (props: any) => {
  const finishTask = () => {

    props.setTasks(
      props.tasks.map((task: any) =>
        task.id === props.index ? { id: task.id, isCompleted: !task.isCompleted, name: task.name } : task
      ));
  }
  return (
    <button
      className={'button' + (props.tasks[props.index].isCompleted ? ' button-on' : '')}
      onClick={finishTask}>
    </button>
  );
};

export default FinishTaskButton;
// src/components/TaskList.tsx (updated)
import React, { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../ui/Tooltip';

const TaskCard = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish documentation', status: 'Active' },
    { id: 2, title: 'Refactor code', status: 'Completed' },
  ]);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: 'New Task ' + (tasks.length + 1),
      status: 'Active',
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <Tooltip text="Click to add a new task!" id="add-task-btn" />
      <Button id="add-task-btn" onClick={handleAddTask}>Add Task</Button>
      {tasks.map(task => (
        <TaskCard key={task.id}>
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
          <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button>
        </TaskCard>
      ))}
    </div>
  );
};

export { TaskList };

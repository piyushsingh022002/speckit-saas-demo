import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';
import { Task } from '../types/Task';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch(() => setError('Failed to load tasks'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul className="bg-white rounded shadow p-4">
        {tasks.map(task => (
          <li key={task.id} className="border-b last:border-b-0 py-2">
            <div className="font-semibold">{task.title}</div>
            {task.description && <div className="text-gray-600">{task.description}</div>}
            {task.dueDate && <div className="text-sm text-gray-400">Due: {task.dueDate}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

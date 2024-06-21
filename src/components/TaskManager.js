import React, { useState } from 'react';

const TaskManager = ({ title, user, userAvatar, initialTasks }) => {
  const [taskList, setTaskList] = useState(initialTasks);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  const completedTasks = taskList.filter((task) => task.completed).length;
  const totalTasks = taskList.length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="flex flex-col p-6 max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg space-y-6 transform transition hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src={userAvatar}
          alt={`${user}'s Avatar`}
        />
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-600">Welcome back, {user}!</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700">Tasks</h2>
        <ul className="divide-y divide-gray-300">
          {taskList.map((task) => (
            <li
              key={task.id}
              className="py-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="form-checkbox h-6 w-6 text-green-600"
                />
                <span
                  className={`ml-3 text-lg ${
                    task.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-700'
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <div className="ml-3 text-gray-500 text-sm">
                {task.completed ? 'Completed' : 'In Progress'}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700">Progress</h2>
        <div className="w-full bg-gray-300 rounded-full h-5">
          <div
            className="bg-green-500 h-5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-600">
          {completedTasks} of {totalTasks} tasks completed
        </p>
      </div>
    </div>
  );
};

export default TaskManager;

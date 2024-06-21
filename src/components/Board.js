import React from 'react';
import TaskManager from './TaskManager';

const personalTasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true },
  { id: 3, title: 'Call family', completed: false },
];

const workTasks = [
  { id: 1, title: 'Finish project report', completed: false },
  { id: 2, title: 'Update team on progress', completed: false },
  { id: 3, title: 'Review codebase', completed: true },
];

const fitnessTasks = [
  { id: 1, title: 'Run 5 miles', completed: true },
  { id: 2, title: 'Gym workout', completed: false },
  { id: 3, title: 'Rhapsody Reading', completed: false },
];

const Board = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-200 p-10 space-y-8 lg:space-y-0 lg:space-x-8">
      <TaskManager
        title="Personal Tasks"
        user="Alice"
        userAvatar="https://randomuser.me/api/portraits/women/75.jpg"
        initialTasks={personalTasks}
      />
      <TaskManager
        title="Work Tasks"
        user="Bob"
        userAvatar="https://randomuser.me/api/portraits/men/76.jpg"
        initialTasks={workTasks}
      />
      <TaskManager
        title="Fitness Goals"
        user="Charlie"
        userAvatar="https://randomuser.me/api/portraits/men/77.jpg"
        initialTasks={fitnessTasks}
      />
    </div>
  );
};

export default Board;

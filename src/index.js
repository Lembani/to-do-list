import addTask from './modules/add-task';
import showTasks from './modules/show-tasks';

import './style.css';

const addTaskInput = document.querySelector('.add-task-input');
const addBtn = document.querySelector('.add-task-btn');

document.addEventListener('DOMContentLoaded', showTasks);

addBtn.addEventListener('click', addTask);
addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(e);
  }
});

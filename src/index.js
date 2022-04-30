import Task from './actions.js';

import './style.css';

const addTaskInput = document.querySelector('.add-task-input');
const addBtn = document.querySelector('.add-task-btn');
const mainTasksCont = document.querySelector('.main-tasks');
const clearComplete = document.querySelector('.clear-btn');

addBtn.addEventListener('click', Task.addTask);
addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    Task.addTask(e);
  }
});

mainTasksCont.addEventListener('click', Task.deleteTask);
clearComplete.addEventListener('click', Task.clearComplete);
document.addEventListener('DOMContentLoaded', Task.showTasks);
document.addEventListener('DOMContentLoaded', Task.actions);
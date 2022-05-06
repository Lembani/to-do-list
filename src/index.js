import Task from './actions.js';

import './style.css';

const { taskForm } = document.forms;
const { description } = taskForm;

const addTaskInput = document.querySelector('.add-task-input');
const addBtn = document.querySelector('.add-task-btn');
const mainTasksCont = document.querySelector('.main-tasks');
const clearComplete = document.querySelector('.clear-btn');

const task = new Task();

addBtn.addEventListener('click', () => {
  task.addTask(description.value);
});
addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    task.addTask(description.value);
  }
});

mainTasksCont.addEventListener('click', (e) => {
  if (e.target.id === 'del') {
    const id = e.target.value;
    task.deleteTask(id);
  }
});
clearComplete.addEventListener('click', () => { task.clearComplete(); });
document.addEventListener('DOMContentLoaded', () => {
  task.showTasks();
});
document.addEventListener('DOMContentLoaded', () => { task.actions(); });
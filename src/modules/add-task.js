import showTasks from './show-tasks.js';

const { taskForm } = document.forms;
const { description } = taskForm;

const addTask = (e) => {
  e.preventDefault();

  let tasks;

  tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (tasks = JSON.parse(localStorage.getItem('tasks'))) : [];

  const task = {
    description: '',
    completed: false,
    index: 0,
  };

  if (description.value === '') {
    return false;
  }

  task.description = description.value;
  task.index = tasks.length + 1;
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  description.value = '';
  showTasks();
  return true;
};

export default addTask;

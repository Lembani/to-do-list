import showTasks from './show-tasks.js';

const deleteTask = (e) => {
  if (e.target.classList.contains('remove')) {
    const id = e.target.attributes.id.value;
    const filteredtasks = JSON.parse(localStorage.getItem('tasks')).filter(
      (task) => task.id !== +id,
    );
    localStorage.setItem('tasks', JSON.stringify(filteredtasks));
    showTasks();
  }
};

export default deleteTask;

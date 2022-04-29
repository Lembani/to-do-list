const mainTasks = document.querySelector('.main-tasks');

const showTasks = () => {
  mainTasks.innerHTML = '';
  let tasks = [];
  tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (tasks = JSON.parse(localStorage.getItem('tasks'))) : [];

  tasks.forEach((task) => {
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');
    const checkInput = document.createElement('input');
    checkInput.classList.add('check');
    checkInput.type = 'checkbox';
    checkInput.checked = task.completed;
    const descriptionContainer = document.createElement('p');
    descriptionContainer.classList.add('description');
    descriptionContainer.innerText = task.description;

    const editIcon = document.createElement('span');
    editIcon.classList.add('edit-icon', 'material-icons');
    editIcon.innerText = 'more_vert';

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-icon', 'material-icons', 'remove');
    deleteIcon.innerText = 'delete';
    deleteIcon.style.display = 'none';

    const hr = document.createElement('hr');
    tasksContainer.append(checkInput);
    tasksContainer.append(descriptionContainer);
    tasksContainer.append(editIcon);
    tasksContainer.append(deleteIcon);
    tasksContainer.append(hr);

    mainTasks.append(tasksContainer);
  });

  return mainTasks;
};

export default showTasks;
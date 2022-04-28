import './style.css';

function component() {
  const tasks = [
    {
      description: 'Make breakfast.',
      completed: true,
      index: 0,
    },
    {
      description: 'Do morning workout.',
      completed: false,
      index: 1,
    },
    {
      description: 'Prepare for morning session.',
      completed: true,
      index: 2,
    },
    {
      description: 'Join morning session meeting.',
      completed: false,
      index: 3,
    },
  ];

  const mainTasks = document.querySelector('.main-tasks');

  tasks.forEach((task) => {
    const taskTemplate = `
      <div class="tasks-container">
        <input class="check" type="checkbox" name="taskCheck" id="taskChecked">
        <p class="description">${task.description}</p>
        <span class="edit-icon  material-icons">more_vert</span>
      </div>
      <hr>
  `;

    mainTasks.innerHTML += taskTemplate;
  });

  return mainTasks;
}

component();

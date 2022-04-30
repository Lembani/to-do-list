const { taskForm } = document.forms;
const { description } = taskForm;

const mainTasks = document.querySelector('.main-tasks');

export default class Task {
  static showTasks = () => {
    this.tasks = [];
    this.tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (this.tasks = JSON.parse(localStorage.getItem('tasks'))) : [];
    mainTasks.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskTemplate = `
        <div class="tasks-container" id="${task.index}">
          <input type="checkbox" class="check">
          <input type="text" class="description" id="${task.index}" value="${task.description}">
            <span class="edit-icon material-icons">delete<span>
          </div>
          <hr>
        `;

      mainTasks.innerHTML += taskTemplate;
    });
    this.actions();
  };

  static addTask = (e) => {
    e.preventDefault();

    this.tasks = [];
    this.tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (this.tasks = JSON.parse(localStorage.getItem('tasks'))) : [];

    const task = {
      description: '',
      completed: false,
      index: 0,
    };

    if (description.value === '') {
      return false;
    }

    task.description = description.value;
    task.index = this.tasks.length + 1;
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    description.value = '';
    this.showTasks();
    return true;
  };

  static deleteTask = (e) => {
    this.tasks = [];
    this.tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (this.tasks = JSON.parse(localStorage.getItem('tasks'))) : [];

    if (e.target.classList.contains('edit-icon')) {
      const id = Number(e.target.parentNode.attributes.id.value);
      this.tasks.splice((id - 1), 1);
      this.tasks.forEach((task, index) => {
        task.index = index + 1;
      });
      this.tasks.sort((x, y) => x.index - y.index);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.showTasks();
    }
  };

  static editTask = (index, description) => {
    this.tasks[index - 1].description = description;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  static actions = () => {
    const allTasks = document.querySelectorAll('.tasks-container');
    if (allTasks) {
      allTasks.forEach((vTask) => {
        vTask.addEventListener('change', (e) => {
          const index = e.target.getAttribute('id');
          const description = e.target.value;
          this.editTask(index, description);
          this.showTasks();
        });
      });
    }
  }
}

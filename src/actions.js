const mainTasks = document.querySelector('.main-tasks');

export default class Task {
  showTasks = () => {
    this.tasks = [];
    this.tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (this.tasks = JSON.parse(localStorage.getItem('tasks'))) : [];
    mainTasks.innerHTML = '';
    this.tasks.forEach((task) => {
      let taskTemplate = `<div class="tasks-container" id="${task.index}">`;
      if (task.completed) {
        taskTemplate += `
                  <span class="material-icons check">
                    done
                  </span>
                  <input type="text" class="description completed" value="${task.description}">
                  <span class="edit-icon material-icons id="del">delete<span>
                  </div>
                  <hr>
                  `;
      } else {
        taskTemplate += `
                  <span class="material-icons check">
                    check_box_outline_blank
                  </span>
                  <input type="text" class="description" value="${task.description}">
                  <span class="edit-icon material-icons" id="del">delete<span>
                  </div>
                  <hr>
                  `;
      }

      mainTasks.innerHTML += taskTemplate;
    });
    this.actions();
  };

  addTask = (descrip) => {
    this.tasks = [];
    this.tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (this.tasks = JSON.parse(localStorage.getItem('tasks'))) : [];

    const task = {
      description: '',
      completed: false,
      index: 0,
    };

    if (descrip.value === '') {
      return false;
    }

    task.description = descrip.value;
    task.index = this.tasks.length + 1;
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    descrip.value = '';
    this.showTasks();
    return true;
  };

  deleteTask = (id) => {
    this.tasks = [];
    this.tasks = JSON.parse(localStorage.getItem('tasks')) !== null ? (this.tasks = JSON.parse(localStorage.getItem('tasks'))) : [];

    this.tasks.splice((id - 1), 1);
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    this.tasks.sort((x, y) => x.index - y.index);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.showTasks();
  };

  editTask = (index, description) => {
    this.tasks[index - 1].description = description;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  updateStatus(index) {
    if (index !== undefined) {
      if (this.tasks[index - 1].completed === true) {
        this.tasks[index - 1].completed = false;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } else {
        this.tasks[index - 1].completed = true;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
    this.showTasks();
  }

  clearComplete = () => {
    this.tasks = this.tasks.filter((task) => task.completed !== true);
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    this.tasks.sort((x, y) => x.index - y.index);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.showTasks();
  }

  actions = () => {
    const allTasks = document.querySelectorAll('.tasks-container');
    if (allTasks) {
      allTasks.forEach((vTask) => {
        vTask.addEventListener('change', (e) => {
          const index = vTask.id;
          const description = e.target.value;
          this.editTask(index, description);
          this.showTasks();
        });
      });
    }
    const statusBtns = document.querySelectorAll('.check');
    if (statusBtns !== null) {
      statusBtns.forEach((checkBtn) => {
        checkBtn.addEventListener('click', () => {
          const checkId = checkBtn.parentNode.id;
          this.updateStatus(checkId);
        });
      });
    }
  }
}

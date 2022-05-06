/**
 * @jest-environment jsdom
 */

import Task from './actions.js';

document.body.innerHTML = `
<section>
<h1 class="main-heading">To Do List</h1>
<div class="todo-container">
  <div class="todo-header">
    <h2 class="title">Today's To Do</h2>
    <span class="refresh material-icons">refresh</span>
  </div>
  <hr>
  <form name="taskForm" class="add-task-container">
    <input class="add-task-input" type="text" name="description" id="addTask" placeholder="Add to your list..." required>
    <span class="add-task-btn material-icons">keyboard_return</span>
  </form>
  <hr>
  <div class="main-tasks"></div>
  <div class="clear">
    <button type="button" class="clear-btn">Clear all completed</button>
  </div>
</div>
</section>
`;

const task = new Task();

const taskOne = 'Task One';
const taskTwo = 'Task Two';

describe('check if add and delete task are using localStorage and the DOM', () => {
  test('should add a task to localStorage', () => {
    task.addTask(taskOne);
    task.addTask(taskTwo);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([
      { description: taskOne, completed: false, index: 1 },
      { description: taskTwo, completed: false, index: 2 },
    ]);
  });

  test('should add tasks to the DOM', () => {
    const addedItems = document.querySelectorAll('.tasks-container');
    expect(addedItems.length).toBe(2);
  });
  test('should remove task from localStorage', () => {
    task.deleteTask(1);
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(1);
  });

  test('should remove task from the DOM', () => {
    const addedItems = document.querySelectorAll('.tasks-container');
    expect(addedItems.length).toBe(1);
  });
});

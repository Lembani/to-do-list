import _ from 'lodash';
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

  const mainHeading = document.querySelector('.main-heading');
  mainHeading.innerHTML = _.join(['To Do List'], ' ');

  return mainHeading;
}

document.body.appendChild(component());

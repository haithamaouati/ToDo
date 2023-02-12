const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  const task = taskInput.value;
  if (task === '') return;
  
  const li = document.createElement('li');
  li.innerText = task;
  taskList.appendChild(li);
  taskInput.value = '';
}

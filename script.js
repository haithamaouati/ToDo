const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);

loadTasks();

function addTask(e) {  e.preventDefault();
  if (!taskInput.value) return;

  const task = document.createElement('li');
  task.innerHTML = `
    <input type="checkbox">
    <span>${taskInput.value}</span>
    <button class="remove-task">Remove</button>
  `;

  taskList.appendChild(task);

  taskInput.value = '';

  saveTasks();
}

function removeTask(e) {
  if (!e.target.classList.contains('remove-task')) return;

  const task = e.target.parentElement;
  taskList.removeChild(task);

  saveTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

function loadTasks() {
  const tasks = localStorage.getItem('tasks');
  if (!tasks) return;

  taskList.innerHTML = tasks;
} 

// CRUD Task Manager with animations and localStorage persistence

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Retrieve tasks from localStorage or start with an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render all tasks
function renderTasks() {
  taskList.innerHTML = '';
  if (tasks.length === 0) {
    taskList.innerHTML = `<li style="text-align:center;color:#999;font-size:1rem;">No tasks yet. Add one!</li>`;
    return;
  }
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = `task-item${task.completed ? ' completed' : ''}`;
    li.setAttribute('data-index', idx);

    li.innerHTML = `
      <span class="task-text">${escapeHTML(task.text)}</span>
      <span class="task-actions">
        <button class="btn btn-complete" title="Complete">${task.completed ? 'Undo' : 'Done'}</button>
        <button class="btn btn-edit" title="Edit">Edit</button>
        <button class="btn btn-delete" title="Delete">Delete</button>
      </span>
    `;
    taskList.appendChild(li);
  });
}

// Helper to escape HTML (security)
function escapeHTML(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add Task
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = taskInput.value.trim();
  if (value) {
    tasks.unshift({ text: value, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = '';
    taskInput.focus();
  }
});

// Handle Task actions (event delegation)
taskList.addEventListener('click', function(e){
  const li = e.target.closest('.task-item');
  if (!li) return;
  const idx = Number(li.getAttribute('data-index'));

  // Complete/Undo
  if (e.target.classList.contains('btn-complete')) {
    tasks[idx].completed = !tasks[idx].completed;
    saveTasks();
    renderTasks();
  }

  // Edit
  if (e.target.classList.contains('btn-edit')) {
    const newText = prompt('Edit your task:', tasks[idx].text);
    if (newText !== null && newText.trim() !== '') {
      tasks[idx].text = newText.trim();
      saveTasks();
      renderTasks();
    }
  }

  // Delete
  if (e.target.classList.contains('btn-delete')) {
    if (confirm('Are you sure you want to delete this task?')) {
      // Animation before removing
      li.style.transition = 'opacity 0.4s, transform 0.4s';
      li.style.opacity = '0';
      li.style.transform = 'translateX(42px)';
      setTimeout(() => {
        tasks.splice(idx, 1);
        saveTasks();
        renderTasks();
      }, 400);
    }
  }
});

// Initial render
renderTasks();
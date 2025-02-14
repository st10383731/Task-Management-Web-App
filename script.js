// Get references to the HTML elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskPriority = document.getElementById('taskPriority');
const taskDueDate = document.getElementById('taskDueDate');
const taskNotes = document.getElementById('taskNotes');
const taskList = document.getElementById('taskList');
const darkModeToggle = document.getElementById('darkModeToggle');
const allTasksBtn = document.getElementById('allTasksBtn');
const activeTasksBtn = document.getElementById('activeTasksBtn');
const completedTasksBtn = document.getElementById('completedTasksBtn');
const sortTasks = document.getElementById('sortTasks');
const searchTasks = document.getElementById('searchTasks');

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach(task => {
        createTask(task);
    });
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    const taskElements = document.querySelectorAll('li');
    taskElements.forEach(taskElement => {
        const taskText = taskElement.querySelector('.task-text').textContent;
        const taskPriority = taskElement.classList[1];
        const taskDueDate = taskElement.querySelector('.task-due-date').textContent;
        const taskNotes = taskElement.querySelector('.task-notes').textContent;
        const completed = taskElement.classList.contains('completed');
        tasks.push({ taskText, taskPriority, taskDueDate, taskNotes, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Create a new task element
function createTask({ taskText, taskPriority, taskDueDate, taskNotes, completed }) {
    const li = document.createElement('li');
    li.classList.add(taskPriority);
    if (completed) li.classList.add('completed');
    
    li.innerHTML = `
        <div class="task-details">
            <span class="task-text">${taskText}</span>
            <span class="task-due-date">${taskDueDate}</span>
            <span class="task-notes">${taskNotes}</span>
        </div>
        <button class="delete">Delete</button>
    `;

    const deleteBtn = li.querySelector('.delete');
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
        saveTasks();
    });

    li.querySelector('.task-text').addEventListener('click', function () {
        li.classList.toggle('completed');
        saveTasks();
    });

    taskList.appendChild(li);
    saveTasks();
}

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    const priority = taskPriority.value;
    const dueDate = taskDueDate.value;
    const notes = taskNotes.value.trim();

    if (taskText !== '' && dueDate !== '') {
        const task = { taskText, taskPriority: priority, taskDueDate: dueDate, taskNotes: notes, completed: false };
        createTask(task);
        taskInput.value = '';
        taskNotes.value = '';
        taskDueDate.value = '';
    }
}

// Dark Mode toggle
darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});

// Task Filters
allTasksBtn.addEventListener('click', () => {
    const tasks = taskList.children;
    for (let task of tasks) {
        task.style.display = 'flex';
    }
});

activeTasksBtn.addEventListener('click', () => {
    const tasks = taskList.children;
    for (let task of tasks) {
        if (task.classList.contains('completed')) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex';
        }
    }
});

completedTasksBtn.addEventListener('click', () => {
    const tasks = taskList.children;
    for (let task of tasks) {
        if (task.classList.contains('completed')) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    }
});

// Sorting tasks
sortTasks.addEventListener('change', function () {
    const tasks = [...taskList.children];
    const sortValue = sortTasks.value;

    tasks.sort((a, b) => {
        switch (sortValue) {
            case 'priority':
                return a.classList[1] > b.classList[1] ? 1 : -1;
            case 'dueDate':
                return a.querySelector('.task-due-date').textContent > b.querySelector('.task-due-date').textContent ? 1 : -1;
            case 'completion':
                return a.classList.contains('completed') ? 1 : -1;
            default:
                return 0;
        }
    });

    taskList.innerHTML = '';
    tasks.forEach(task => taskList.appendChild(task));
});

// Search tasks
searchTasks.addEventListener('input', function () {
    const searchText = searchTasks.value.toLowerCase();
    const tasks = taskList.children;

    for (let task of tasks) {
        const taskText = task.querySelector('.task-text').textContent.toLowerCase();
        if (taskText.includes(searchText)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    }
});

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Load tasks on page load
loadTasks();

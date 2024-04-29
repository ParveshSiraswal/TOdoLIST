document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');
    const totalTasks = document.getElementById('totalTasks');

    let taskId = 1; // Unique id for each todo item

    // Function to create a new todo item
    function createTodoItem(taskName) {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskName}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoItem.setAttribute('data-id', taskId);
        taskId++;
        todoList.appendChild(todoItem);
        updateTotalTasks();
    }

    // Function to update the total number of tasks
    function updateTotalTasks() {
        totalTasks.textContent = todoList.children.length;
    }

    // Event listener for adding a new todo item
    addTodoBtn.addEventListener('click', function () {
        const taskName = todoInput.value.trim();
        if (taskName !== '') {
            createTodoItem(taskName);
            todoInput.value = ''; // Clear the input field after adding todo
        }
    });

    // Event delegation for marking todo item as completed and deleting todo item
    todoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('checkbox')) {
            const todoItem = event.target.parentNode;
            todoItem.classList.toggle('completed');
        } else if (event.target.classList.contains('delete-btn')) {
            const todoItem = event.target.parentNode;
            todoList.removeChild(todoItem);
            updateTotalTasks();
        }
    });
});

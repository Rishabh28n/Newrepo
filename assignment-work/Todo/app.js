
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const deleteAllBtn = document.getElementById('deleteAllBtn');
let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `list-group-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
              <span>${todo.text}</span>
              <span class="delete-btn" onclick="deleteTodo(${index})">&times;</span>
          `;
        li.querySelector('span:first-child').addEventListener('click', () => toggleTodo(index));
        todoList.appendChild(li);
    });
}

function addTodo(text) {
    todos.push({ text, completed: false });
    renderTodos();
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function deleteAllTodos() {
    todos = [];
    renderTodos();
}

todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        addTodo(this.value.trim());
        this.value = '';
    }
});

deleteAllBtn.addEventListener('click', deleteAllTodos);

// Initial todos
addTodo('Some Task');
addTodo('Another Task');
addTodo('One Task');
addTodo('Two Task');

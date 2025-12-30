const todoList = [{
    name: 'run',
    dueDate: '2025-12-1'},{
    name: 'walk dog',
    dueDate: '2025-12-2'},{
    name: 'code', 
    dueDate: '2025-12-3'
    }];
renderTodoList();
function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;

        //const {name} = todoObject;
        //const duewDate = todoObject.duewDate;
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button> `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(item) {
    const inputElement =  document.querySelector('.js-name-input');

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate= dateInputElement.value;

    const name = inputElement.value.trim();
   if(name !== ''){
    todoList.push({
        name: name, 
        dueDate: dueDate
    });
   }

    inputElement.value = '';
   renderTodoList();
}
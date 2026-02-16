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
 todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        " class="delete-todo-button 
        js-delete-todo-button">Delete</button> `;
        todoListHTML += html; 
 });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deletebutton, index) => {
        deletebutton.addEventListener('click', () => {
             todoList.splice(index, 1);
            renderTodoList();
        });
    })
}

document.querySelector('.js-add-todo-button').addEventListener('click', () =>{
    addTodo();
})
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
  
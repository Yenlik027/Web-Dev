'use strict'
const todoForm=document.getElementById('todo-form');
const todoInput=document.getElementById('todo-input');
const todoList=document.getElementById('todo-list');

const createTodoItem=(text) =>{
    const listItem=document.createElement('li');
    const leftContainer=document.createElement('div');
    leftContainer.className='task-left';

    const checkbox=document.createElement('input');
    checkbox.type='checkbox';

    const taskText=document.createElement('span');
    taskText.className='task-text';
    taskText.textContent=text;

    checkbox.addEventListener('change', () =>{
        taskText.classList.toggle('completed');
    });

    const deleteButton=document.createElement('button');
    deleteButton.className='delete-button';
    deleteButton.textContent='delete';

    deleteButton.addEventListener('click', () =>{
        todoList.removeChild(listItem);
    });

    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(taskText);

    listItem.appendChild(leftContainer);
    listItem.appendChild(deleteButton);

    return listItem;
};

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value=todoInput.value.trim();
    if(value === ''){
        return;
    }
    const todoItem=createTodoItem(value);
    todoList.appendChild(todoItem);

    todoInput.value = '';
    todoInput.focus();
});


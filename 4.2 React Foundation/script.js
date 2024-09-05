let id = 0;
const add = () => {
    const container = document.getElementById('container');
    const title = document.getElementById('titleId').value;
    const des = document.getElementById('desId').value;

    // Create a wrapper div for the todo item
    const todoItem = document.createElement('div');
    todoItem.setAttribute('id', id); // Assign the unique id to the todo item

    const titleAdd = document.createElement('div');
    titleAdd.innerHTML = title;

    const desAdd = document.createElement('div');
    desAdd.innerHTML = des;

    const buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = "Mark as Done";
    buttonAdd.setAttribute("onclick", `markAsDone(${id})`); // Use the unique id

    todoItem.appendChild(titleAdd);
    todoItem.appendChild(desAdd);
    todoItem.appendChild(buttonAdd);

    container.appendChild(todoItem);

    id++; // Increment the id for the next item
}

const markAsDone = (todoId) => {
    const parent = document.getElementById(todoId);
    if (parent) {
        parent.children[2].innerHTML = "Done!";
    }
}

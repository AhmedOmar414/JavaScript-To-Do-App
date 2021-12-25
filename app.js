//Selectors

const todo_input = document.querySelector(".to-do");
const todo_btn = document.querySelector(".btn");
const todo_list = document.querySelector(".ul-elments");
const del_btn = document.querySelector('.trash_btn');
const list_contianer = document.querySelector('.todo-list-contianer');
const para1 = document.querySelector('.para');
const option = document.querySelector('.filter');

//Event Listeners

todo_btn.addEventListener("click", AddTodo);
todo_list.addEventListener('click', check);
option.addEventListener('click', filter);
//Functions

function AddTodo(event) {

    if (todo_input.value == "") {
        event.preventDefault();
    } else {
        para1.remove();
        //prevent hte browser from being submited
        event.preventDefault();
        // console.log("Hello");
        //prevent browser from submiting 


        //Create div inside ul which contians our li

        const tododiv = document.createElement("div");
        tododiv.classList.add("inner-div");

        //create li inside the div
        const li_item = document.createElement("li");
        li_item.innerText = todo_input.value;
        li_item.classList.add("li_item");
        //append the li inside the div
        tododiv.appendChild(li_item);

        //create completed button

        const completed_btn = document.createElement("button");
        completed_btn.innerHTML = '<i class="fas fa-check"></i>';
        completed_btn.classList.add("cpmpleted_btn");
        tododiv.appendChild(completed_btn);

        //create trashed button

        const trash_btn = document.createElement("button");
        trash_btn.innerHTML = '<i class="fas fa-trash"></i>';
        trash_btn.classList.add("trash_btn");
        tododiv.appendChild(trash_btn);
        todo_list.appendChild(tododiv);

        //Remove the input field value
        todo_input.value = "";
    }

}

//delete item function

//this function indicates where im pressing right now
function check(event) {
    const item = event.target;
    if (item.classList == "trash_btn") {
        item.parentElement.classList.toggle('remove');
        item.parentElement.addEventListener("transitionend", function() {
            item.parentElement.remove();
        });

    } else if (item.classList == "cpmpleted_btn") {
        const current = item.parentElement;
        current.classList.toggle('completed');
    }
}

function filter(event) {
    const childs = todo_list.childNodes;
    const todo = document.querySelector('.inner-div')
    childs.forEach(function(todo) {
        switch (event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

            default:
                break;
        }
    });

}
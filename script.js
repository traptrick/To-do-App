var addBtn = document.querySelector('.addBtn');
var data = document.querySelector('.tasks');
const list = document.querySelector('.list');


addBtn.addEventListener('click', realwork);
list.addEventListener('click', deleteCheck);


function realwork(){

  if(data.value == ""){
      alert("Write Something First, Input Field Cannot Be Empty.")
  }
  else{

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('taskadder');

    const newTodo = document.createElement('li');
    newTodo.innerText = data.value;

    todoDiv.appendChild(newTodo);

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtnStyle');
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';

    todoDiv.appendChild(deleteBtn);

    // checked button
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('checkBtnStyle');
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    
    todoDiv.appendChild(checkBtn);

    // appending everything in list
    list.appendChild(todoDiv);

    //clearing input field after adding tasks
    data.value = "";
  }
    
}

function deleteCheck(e){
    //console.log(e.target);

    const item = e.target;

    if(item.classList[0] === "deleteBtnStyle"){
        const todo = item.parentElement;
        todo.classList.add('delAnimation');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] === "checkBtnStyle"){
        const todo = item.parentElement;
        todo.classList.toggle('completedTask');
    }

}







const addInput = document.querySelector(".add-input");
const addBtn = document.querySelector(".add-btn");
const tasks = document.querySelector(".tasks");
const clearBtn = document.querySelector(".clear-btn");


let todos = JSON.parse(localStorage.getItem("todos")) || [];


function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


function renderTodos() {
  tasks.innerHTML = "";

  todos.forEach((todo, index) => {
    const html = `
<div class="info-content"
  style="
    font-family: sans-serif;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #cacaca;
    width: 95%;
    border-radius:5px;
    justify-content: space-between;
    overflow:hidden;
    height:50px;">
    
  <p class="text-task">${todo}</p>
  
  <div style="
      background-color: rebeccapurple;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      height:80%;">
      
    <img data-index="${index}" class="delete-btn" width="30" height="30" src="trash-bin (1).png"/>
  </div>
</div>
`;
    tasks.innerHTML += html;
  });

  
  if (todos.length > 0) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }
}


renderTodos();



addBtn.addEventListener("click", () => {
  if (addInput.value === "") {
    addInput.placeholder = "Write something...";
    addInput.classList.add("styleInput");
    return;
  }

  addInput.placeholder = "Add your new todo";
  addInput.classList.remove("styleInput");

  todos.push(addInput.value); 
  saveTodos();

  addInput.value = "";
  renderTodos();
});



tasks.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const index = deleteBtn.dataset.index;
  todos.splice(index, 1);

  saveTodos();
  renderTodos();
});



clearBtn.addEventListener("click", () => {
  todos = [];
  saveTodos();
  renderTodos();
});

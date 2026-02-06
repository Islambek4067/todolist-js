const addInput = document.querySelector(".add-input");
const addBtn = document.querySelector(".add-btn");
const tasks = document.querySelector(".tasks");
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  tasks.innerHTML = "";
  clearBtn.classList.add("hidden");
});
addBtn.addEventListener("click", () => {
  if (addInput.value === "") {
    addInput.placeholder = "Write something...";
    addInput.classList.add("styleInput");
    return;
  }
  if (addInput.value !== "") {
    addInput.placeholder = "Add your new Todo";
    addInput.classList.remove("styleInput");
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
            height:50px;            
          

          "
        >
          
          <p class="text-task">${addInput.value}</p>
          <div
            style="
              background-color: rebeccapurple;
              padding: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              height:80%;
            "
          >
            <img class="delete-btn" width="30px" height="30px" src="trash-bin (1).png" alt="" />
          </div>
        </div>
`;

    tasks.innerHTML += html;

    addInput.value = "";

    if (tasks.children.length > 0) {
      clearBtn.classList.remove("hidden");
    }
  }
});
tasks.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;
  if (deleteBtn) {
    deleteBtn.closest(".info-content").remove();
  }
  if (tasks.children.length === 0) {
    clearBtn.classList.add("hidden");
  }
});

const addInput = document.querySelector(".add-input");
const addBtn = document.querySelector(".add-btn");
const tasks = document.querySelector(".tasks");

addBtn.addEventListener("click", () => {
  const html = `
<div 
          style="
            font-family: sans-serif;
            padding-left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            background: #cacaca;
            width: 100%;
            justify-content: space-between;
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
            <img class="delete-btn" width="40px" height="100%" src="trash-bin (1).png" alt="" />
          </div>
        </div>
`;

  tasks.innerHTML += html;
  const textTask = document.querySelectorAll(".text-task");
  const deleteBtn = document.querySelectorAll(".delete-btn");
  addInput.value = "";
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", () => {
      textTask[i].classList.add("crossed");
    });
  }
});

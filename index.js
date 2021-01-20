const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");

btn.addEventListener("click", function (event) {
  //Add Event Prevent Default
  event.preventDefault();
  //create div
  const div = document.createElement("div");
  div.classList.add("todo");
  //create li
  const li = document.createElement("li");
  if (input.value == "") {
    alert(`Write something`);
    return false;
  } else {
    li.innerText = input.value;
  }

  li.classList.add("item");
  div.appendChild(li);
  //check mark
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkBtn.classList.add("complete-btn");
  div.appendChild(checkBtn);
  //delete mark
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("delete-btn");
  div.appendChild(deleteBtn);
  //edit mark
  // const editBtn = document.createElement("button");
  // editBtn.innerHTML = '<i class="material-icons">border_color</i>';
  // //editBtn.innerHTML = '<i class="edit-btn"></i>';
  // editBtn.classList.add("edit-btn");
  // div.appendChild(editBtn);
  //append to list
  ul.appendChild(div);
  //Clear theinput value
  input.value = "";
});

ul.addEventListener("click", function (e) {
  const item = e.target;
  //delete button
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  // if (item.classList[0] === "edit-btn") {
  //   const todo = item.parentElement;
  //   todo.contentEditable = true;
  //   var toggled = false;
  //   function toggle() {
  //     if (!toggled) {
  //       toggled = true;
  //       document.getElementsByClassName("edit-btn").style.display = "none";
  //       return;
  //       // } else {
  //       //   toggled = false;
  //       //   const saveBtn = document.createElement("button");
  //       //   saveBtn.innerHTML = '<i class="fa fa-save"></i>';
  //       //   //saveBtn.innerHTML = '<i class="save-btn"></i>';
  //       //   saveBtn.classList.add("save-btn");
  //       //   div.appendChild(saveBtn);
  // //       //   //append to list
  // //       //   ul.appendChild(div);
  //      }
  //    }
  // }
});

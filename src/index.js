document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const toDoItem = e.target["new-task-description"].value;

    if (toDoItem.length > 0) {
      publishToDo(toDoItem);
    }
  });
});

const publishToDo = (todo) => {
  const tasks = document.querySelector("#tasks");
  const paragraph = document.createElement("li");
  tasks.appendChild(paragraph);
  paragraph.textContent = `${todo} `;

  const cancelBtn = document.createElement("button");
  paragraph.appendChild(cancelBtn);
  cancelBtn.textContent = "X";
  cancelBtn.addEventListener("click", removeToDo);
};

const removeToDo = (e) => {
  e.target.parentNode.remove();
};
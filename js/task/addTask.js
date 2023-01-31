import CreateTask from "./createTask.js";
import POST__AddTask from "./task.js";
import POST__AddImportantTask from "./task.js";
const TaskContainer = document.querySelector(".tasks-container");
const AddTask = document.querySelector(".task-creation");
const userInput = document.querySelector(".task-creation__input");
let counterId = 0;
console.log(document.querySelector(".title__item").innerHTML);

AddTask.addEventListener("click", function (event) {
  if (event.target.classList[0] === "task-creation__btn") {
    CreateNewTask();
    DrawTask();
  }
});
const itemsAll = document.querySelectorAll(".sidebar__content__nav__list__item");
for (let i = 0; i < itemsAll.length; i++) {
  itemsAll[i].addEventListener("click", function () {
    DrawTask();
  });
}
function DrawTask() {
  let currentImportantTask = POST__AddImportantTask();
  let currentAllTask = POST__AddTask();
  if (document.querySelector(".title__item").innerHTML === "Важно") {
    for (let i = 0; i < TaskContainer.childElementCount; i++) {
      const [task, htmlElement] = currentImportantTask[i];
      if (task.important != "important") {
        TaskContainer.removeChild(TaskContainer.querySelector(`.task_id--${i}`));
      }
    }
    for (const [task, htmlElement] of currentImportantTask) {
      TaskContainer.appendChild(htmlElement);
    }
  } else if (document.querySelector(".title__item").innerHTML === "Мой день") {
    for (const [task, htmlElement] of currentAllTask) {
      TaskContainer.appendChild(htmlElement);
    }
  }
}

function CreateNewTask() {
  let currentTask;
  if (document.querySelector(".title__item").innerHTML === "Важно") {
    currentTask = GetTask("no_compled", "important");
  } else {
    currentTask = GetTask("no_compled", "no_important");
  }
  let currentTaskHTML = CreateTask(currentTask);
  let taskAndElement = [];
  taskAndElement.push(currentTask);
  taskAndElement.push(currentTaskHTML);
  POST__AddTask(taskAndElement);
  if (currentTask.important === "important") {
    POST__AddImportantTask(taskAndElement);
  }
}

function GetTask(compled, important) {
  const userInput = document.querySelector(".task-creation__input");
  let task = {
    id: counterId,
    content: userInput.value,
    compled: compled,
    important: important,
  };
  counterId++;
  userInput.value = "";
  return task;
}

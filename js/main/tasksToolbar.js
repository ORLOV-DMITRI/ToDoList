'use strict';
export default CreateTaskToolbar;

const sideBarClose = document.getElementById("sideBarClose");
const sideBarOpen = document.getElementById("sideBarOpen");
sideBarOpen.style.display = 'none';
let currentIncon = '';

sideBarClose.addEventListener('click', function () {
  let parrent = document.querySelector('.tasks-toolbar__title');
  currentIncon = parrent.firstElementChild;
  parrent.removeChild(parrent.firstElementChild)
  parrent.insertBefore(sideBarOpen, parrent.firstElementChild);
  sideBarOpen.style.display = 'flex';
})
sideBarOpen.addEventListener('click', function () {
  let parrent = document.querySelector('.tasks-toolbar__title');
  parrent.removeChild(parrent.firstElementChild);
  parrent.insertBefore(currentIncon, parrent.firstElementChild);
  sideBarOpen.style.display = 'none';

})


// Создания панели задач взависимости от выбранной категории в sidebar

let currentDate = GetCurrentDate();
document.querySelector('.date').textContent = currentDate;
let parrent = document.querySelector('.tasks-toolbar');

console.log(parrent.hasChildNodes());

function DeleteTaskToolbar() {
  let parrent = document.querySelector('.tasks-toolbar');
  let leftBlock = document.querySelector('.tasks-toolbar__left');
  let rightBlock = document.querySelector('.tasks-toolbar__right');
  parrent.removeChild(leftBlock);
  if (parrent.hasChildNodes()) {
    parrent.removeChild(rightBlock);
  }

}

function CreateTaskToolbar(targetElement) {
  DeleteTaskToolbar();
  const tasksToolBar = document.querySelector('.tasks-toolbar');
  let leftBlock = CreateToolbarLeft(targetElement);
  let rightBlock = CreateTaskToolbarRight();
  let rightElement = document.querySelector('.tasks-toolbar__right');
  tasksToolBar.appendChild(leftBlock);
  tasksToolBar.appendChild(rightBlock);
  if (targetElement != 0) {
    document.querySelector('.tasks-toolbar__sort').classList.add('blue');
    document.querySelector('.tasks-toolbar__left').classList.add('blue');
  }

}


function CreateToolbarLeft(targetElement) {
  let toolbarItems = CreateItemsList();
  let tasksToolbarLeft = document.createElement("div");
  let tasksToolbarTitle = document.createElement("div");
  let iconSpan = document.createElement('span');
  let h2TitleItem = document.createElement('h2');
  tasksToolbarLeft.classList.add('tasks-toolbar__left');
  tasksToolbarTitle.classList.add("tasks-toolbar__title");
  h2TitleItem.classList.add('title__item');

 
  iconSpan.classList.add(toolbarItems[targetElement].icon);
  iconSpan.classList.add('icon-lg');
  h2TitleItem.textContent = toolbarItems[targetElement].title;

  tasksToolbarTitle.appendChild(iconSpan);
  tasksToolbarTitle.appendChild(h2TitleItem);

  tasksToolbarLeft.appendChild(tasksToolbarTitle);

  if (targetElement === 0) {

    tasksToolbarLeft.appendChild(CreateSubTitle());
  }

  return tasksToolbarLeft;

}

function CreateSubTitle() {
  let parrentDiv = document.createElement("div");
  let dateSpan = document.createElement("span");
  parrentDiv.classList.add("tasks-toolbar__subtitle");
  dateSpan.classList.add("date");
  dateSpan.textContent = currentDate;
  
  parrentDiv.appendChild(dateSpan);
  

  return parrentDiv;
}

function CreateTaskToolbarRight() {
  let parrenDiv = document.createElement("div");
  let childDiv = document.createElement("div");
  let iconSpan = document.createElement("span");
  let titleSpan = document.createElement("span");

  parrenDiv.classList.add("tasks-toolbar__right");
  childDiv.classList.add("tasks-toolbar__sort");
  iconSpan.classList.add("icon-sort-alt-up");
  titleSpan.textContent = "Сортировка";

  childDiv.appendChild(iconSpan);
  childDiv.appendChild(titleSpan);
  parrenDiv.appendChild(childDiv);

  return parrenDiv;
}

function CreateItemsList() {
  const Items = [];
  const day = {
    title: "Мой день",
    icon: "icon-sun",
  };
  const important = {
    title: "Важно",
    icon: "icon-star-empty",
  };
  const planned = {
    title: "Запланировано",
    icon: "icon-calendar",
  };
  const appoint = {
    title: "Назначен мне",
    icon: "icon-users",
  };
  const tasks = {
    title: "Задачи",
    icon: "icon-home",
  };
  Items.push(day);
  Items.push(important);
  Items.push(planned);
  Items.push(appoint);
  Items.push(tasks);

  return Items;
}
function GetCurrentDate() {
  

  const Week = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
  const mounth = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  let currentDay = new Date().getDate();
  let currentWeekDay = new Date().getDay();
  let currentMounth = new Date().getMonth();
  
  let currentDate = `${Week[currentWeekDay]}, ${currentDay} ${mounth[currentMounth]}`;

  return currentDate;
}


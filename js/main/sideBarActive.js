import CreateTaskToolbar from './tasksToolbar.js';
import DeletSettingBlock from './createTasks.js';

const itemsAll = document.querySelectorAll(".sidebar__content__nav__list__item");



for (let i = 0; i < itemsAll.length; i++) {
  itemsAll[i].addEventListener("click", function () {
    for (const item of itemsAll) {
        item.classList.remove("active");
    }
    sideItem[i].classList.add("active");
    CreateTaskToolbar(i);
    document.querySelector('.task-creation__input').focus()
    DeletSettingBlock();
  });
}


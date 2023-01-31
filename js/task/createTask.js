export default CreateTask;
import checkBoxs from "./checkBoxsTask.js";

function CreateTask(task) {
  let DIVtaskList_item = document.createElement("div");
  DIVtaskList_item.classList.add("tasks-list__item");
  DIVtaskList_item.classList.add(`task_id--${task.id}`);

  let DIVtaskList_body = document.createElement("div");
  DIVtaskList_body.classList.add("tasks-list__body");

  let SPANcheckBox_compled = document.createElement('span');
  SPANcheckBox_compled.classList.add('tasks-list_checkBox_compled');
  SPANcheckBox_compled.innerHTML = checkBoxs.get(task.compled);

  let SPANcheckBox_important = document.createElement('span');
  SPANcheckBox_important.classList.add('tasks-list__checkBox_important');
  SPANcheckBox_important.innerHTML = checkBoxs.get(task.important);

  let BUTTONcontent = document.createElement('button');
  BUTTONcontent.type = 'button';
  BUTTONcontent.classList.add('tasks-list__openInfo');

  let SPANcontent = document.createElement('span');
  SPANcontent.classList.add('tasks-list__content');
  SPANcontent.textContent = task.content;

 
  BUTTONcontent.appendChild(SPANcontent);
  DIVtaskList_body.appendChild(SPANcheckBox_compled);
  DIVtaskList_body.appendChild(BUTTONcontent);
  DIVtaskList_body.appendChild(SPANcheckBox_important);
  DIVtaskList_item.appendChild(DIVtaskList_body);

  return DIVtaskList_item;

}

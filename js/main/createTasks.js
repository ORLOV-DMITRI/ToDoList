// 'use strict';

export default DeletSettingBlock;

const tasksCreate = document.querySelector('.task-creation');
const createSetting = document.querySelector('.task-creation__setting');
const input = document.querySelector('.task-creation__input');
DeletSettingBlock();


input.oninput = function () {
    tasksCreate.appendChild(createSetting)
    if (input.value === '') {
        tasksCreate.removeChild(createSetting);
    }
}

function DeletSettingBlock() {
    if (tasksCreate.childElementCount == 2) {
        tasksCreate.removeChild(createSetting);
    }
    
}


export default POST__AddTask;

const allTask = [];
const importantTask = [];
const compledTask = [];







function POST__AddTask(task) {
    if(task != null){
        allTask.push(task);
        return allTask;
    }
    return allTask;
}

export function POST__AddImportantTask(task) {
    if(task != null){
        importantTask.push(task);
        return importantTask;
    }
    return importantTask;
}
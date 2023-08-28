
export const addTask = () => {
    taskList.push(newTask);
    return taskList;
};

export const deleteTask = () => {
    taskIndex--;
    taskList.splice(taskIndex, 1);
    return taskList;
};

export const completeTask = () => {
    taskIndex--;
    taskList[taskIndex].complete = false; 
};

export const showTasks = () => {
    console.log("LISTA DE TAREAS:")
    taskList.forEach((task, index) => {
        console.log(`Indicador: ${index+1}.
        Descripción: ${task.description}
        Estado: ${task.complete ? "completada" : "no completada"}`);
    });
};
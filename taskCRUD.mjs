export const taskList = [
  {
    description: "Nueva tarea",
    complete: false,
  },
];

export const addTask = (description) => {
  taskList.push({
    description: description,
    complete: false,
  });
};

export const deleteTask = (taskIndex) => {
  if (taskIndex == "-1") {
    console.log(
      "Utilice el menú para mostrar la lista de tareas y conocer el indicador de la misma."
    );
  } else {
    taskIndex--;
    taskList.splice(taskIndex, 1);
  }
};

export const completeTask = (taskIndex) => {
  if (taskIndex == "-1") {
    console.log(
      "Utilice el menú para mostrar la lista de tareas y conocer el indicador de la misma."
    );
  } else {
    taskIndex--;
    taskList[taskIndex].complete = true;
  }
};

export const showTasks = () => {
  console.log("LISTA DE TAREAS:");
  taskList.forEach((task, index) => {
    console.log(`
        Indicador: ${index+1}.
        Descripción: ${task.description}
        Estado: ${task.complete ? "completada" : "no completada"}
        `);
  });
};

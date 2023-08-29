// function getRandomNumber() {
//   return new Promise((resolve, reject) => {
//     result = Math.floor(Math.random() * 10);
//     setTimeout(() => {
//         resolve(result);
//     },3000)
//   });
// }

export const taskList = [
  {
    description: "Nueva tarea",
    complete: false,
  },
];

// export const addTask = (description) => {
//   taskList.push({
//     description: description,
//     complete: false,
//   });
// };

export function addTask (description) {
  return new Promise ((resolve, reject) => {
    taskList.push({
      description: description,
      complete: false,
    });
    setTimeout(() => {
      resolve("resolved");
  },3000);
  });
};

export const deleteTask = (taskIndex) => {
  return new Promise((resolve, reject) => {
    if (taskIndex == "-1") {
      console.log(
        "Utilice el menú para mostrar la lista de tareas y conocer el indicador de la misma."
      );
    } else {
      taskIndex--;
      taskList.splice(taskIndex, 1);
    }
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
};

export const completeTask = (taskIndex) => {
  return new Promise((resolve) => {
    if (taskIndex == "-1") {
      console.log(
        "Utilice el menú para mostrar la lista de tareas y conocer el indicador de la misma."
      );
    } else {
      taskIndex--;
      taskList[taskIndex].complete = true;
    };
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
  
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

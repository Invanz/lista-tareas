import { addTask, deleteTask, completeTask, showTasks } from "./taskCRUD.mjs";
import * as readline from "readline";

const myInterface = readline.createInterface(process.stdin, process.stdout);

const texts = {
  greetings: "Bienvenidx, cuéntame qué deseas hacer el día de hoy.",
  mainMenu: `
    1. Ver lista de tareas.
    2. Agregar una tarea. 
    3. Eliminar una tarea.
    4. Marcar una tarea como terminada.
    `,
  newRound: "¿Qué deseas hacer ahora?",
  keepQuestion: "¿Deseas volver a ver el menú? Y/N",
  addDescription: "Por favor, escriba el nombre de la tarea",
  idTaskDelete:
    "Por favor, escriba el indicador de la tarea que desea eliminar. Si no lo sabe, escriba -1",
  idTaskComplete:
    "Por favor, escriba el indicador de la tarea completada. Si no lo sabe, escriba -1",
};

const keep = (option) => {
  option = option.toUpperCase();
  option == "Y" ? script(false) : console.log("Adiós");
};

async function newTask(description) {
  console.log("calling...");
  const result = await addTask(description);
  console.log(result);
  myInterface.question(texts.keepQuestion, (option) => {
    keep(option);
  });
};

function script(firstTime = true){
  firstTime ? console.log(texts.greetings) : console.log(texts.newRound);
  myInterface.question(texts.mainMenu, (option) => {
    switch (option) {
      case "1":
        // VER LISTA DE TAREAS
        showTasks();
        myInterface.question(texts.keepQuestion, (option) => {
          keep(option);
        });
        break;
      case "2":
        // AGREGAR UNA TAREA
        myInterface.question(texts.addDescription, (description) => {
          newTask(description);
        });
        break;
      case "3":
        // ELIMINAR UNA TAREA
        myInterface.question(texts.idTaskDelete, (id) => {
          console.log("calling...");
          deleteTask(id).then((resolve) => {
            console.log(resolve);
            myInterface.question(texts.keepQuestion, (option) => {
              keep(option);
            });
          }); 
        });
        break;
      case "4":
        // MARCAR COMO COMPLETADA
        myInterface.question(texts.idTaskComplete, (id) => {
          console.log("calling...");
          completeTask(id).then((resolve) => {
            console.log(resolve);
            myInterface.question(texts.keepQuestion, (option) => {
              keep(option);
            });
          });
        });
        break;
    }
  });
};

script();

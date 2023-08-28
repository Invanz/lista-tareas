// import { addTask, deleteTask, completeTask, showTasks } from "./taskCRUD.mjs";
const { addTask, deleteTask, completeTask, showTasks } = require("./taskCRUD.mjs");

const texts = {
    greetings: "Bienvenidx, cuéntame qué deseas hacer el día de hoy.",
    mainMenu: `
    1. Ver lista de tareas.
    2. Agregar una tarea. 
    3. Eliminar una tarea.
    4. Marcar una tarea como terminada.
    `,
    newRound: "¿Qué deseas hacer ahora?"
}

const readlineSync = require('readline');

const readline = readlineSync.createInterface(process.stdin, process.stdout);

const script = (firstTime = true) => {
    firstTime ? console.log(texts.greetings): console.log(texts.newRound);
    readline.question(texts.mainMenu, (option) => {
        switch(option) {
            case "1":
                showTasks();   
        }
        const keepGoing = true;
    if (keepGoing) {
        script(false);
    }
    });
    
}

script();


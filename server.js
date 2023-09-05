const http = require("http");
const host = "localhost";
const port = 3000;


const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    const taskList = [
        {
            description: "Tarea 1",
            complete: false,
            id: 0,
        },
        {
            description: "Tarea 2",
            complete: true,
            id: 1,
        },
        {
            description: "Tarea 3",
            complete: false,
            id: 2,
        },
        {
            description: "Tarea 4",
            complete: false,
            id: 3,
        },
        {
            description: "Tarea 5",
            complete: true,
            id: 4,
        },
        {
            description: "Tarea 6",
            complete: true,
            id: 5,
        }
    ];

    

    if (url == "/tasks" && method == "GET"){
        console.log(taskList);
        res.statusCode = 200;
        res.write(JSON.stringify(taskList));
    }
    
});

server.listen(port, (error) => {
    if (error) {
        console.log("There is an error -->", error);
    } else {
        console.log("Server is listening...");
    }
})
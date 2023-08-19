const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(cors());
app.use(express.json());

//rutas para login y register 

app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

//rutas para las tareas

app.post("/tasks",controllers.postTasks)
app.get("/tasks",controllers.getTasks)
app.delete("/tasks/:id",controllers.deleteTasks)
app.put("/tasks/:id",controllers.editTasks)


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

module.exports = app;
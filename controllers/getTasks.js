const Tarea = require("../models/tarea");

const getTasks=async (req, res) => {
    try {
      const tasks = await Tarea.find();
      res.json(tasks);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      res.status(500).json({ error: 'Error al obtener las tareas' });
    }
  }

module.exports=getTasks;
const Tarea = require("../models/tarea");

const postTasks=async (req, res) => {
    try {
      const { titulo, descripcion,fecha,userId } = req.body;
      const task = new Tarea({ titulo, descripcion,fecha,userId});
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error('Error al crear una tarea:', error);
      res.status(500).json({ error: 'Error al crear una tarea' });
    }
  }

module.exports=postTasks;
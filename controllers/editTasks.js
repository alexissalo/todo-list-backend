const Tarea = require("../models/tarea");

const editTasks=async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, descripcion} = req.body;
  
      const updatedTask = await Tarea.findByIdAndUpdate(id, {
        titulo,
        descripcion,
      }, { new: true });
  
      if (!updatedTask) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
  
      res.json(updatedTask);
    } catch (error) {
      console.error('Error al editar una tarea:', error);
      res.status(500).json({ error: 'Error al editar una tarea' });
    }
  };

module.exports=editTasks
  
  
  
  
  
  
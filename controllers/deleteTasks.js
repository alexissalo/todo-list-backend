const Tarea = require("../models/tarea");


const deleteTasks=async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTask = await Tarea.findByIdAndDelete(id);
  
      if (!deletedTask) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
  
      res.json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
      console.error('Error al borrar una tarea:', error);
      res.status(500).json({ error: 'Error al borrar una tarea' });
    }
  }

module.exports=deleteTasks;
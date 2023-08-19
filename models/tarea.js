const { model, Schema } = require("mongoose");

const TareaSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: String, required: true },
  userId: {type:String,required:true},
});

module.exports = model("Tarea", TareaSchema);

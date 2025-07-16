
// Requiere el servicio de mongoose
const mongoose = require('mongoose');

// Definimos un esquema con dos campos: 'title' y 'content'
// Esto será la estructura de los documentos en la colección "posts"
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    content:{
        type: String,
        required: true,
    }
}, { timestamps: true });

// Exportamos el modelo 'Post' basado en el esquema 'postSchema'
// Este modelo se usará para crear, leer, actualizar y eliminar posts desde MongoDB
module.exports = mongoose.model('Post', postSchema);
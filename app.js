const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Rutas a asignar
app.use('/api/posts', require('./routes/postRoutes'));

// Intentar conexion por Mongo
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🟢 Conectado a MongoDB'))
    .catch(err => console.error('🔴 Error en MongoDB:', err));

const PORT = process.env.PORT || 5000; // se abre en el puerto 5000 del localhost
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
})
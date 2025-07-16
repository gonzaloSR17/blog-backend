const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Ruta de prueba
router.get('/', (req, res) => {
  res.send('Ruta de posts funcionando ✅');
});


// POST /api/posts -> crear un nuevo post
router.post ('/', async (req, res) => {
 try {
    const { title, content } = req.body; // Lo que añadira al end point lo agragara
    const newPost = new Post({ title, content});
    await newPost.save(); // esperamos hasta que los resultados se guarde y no de error al mandar la solicitud
    res.status(201).json(newPost); // ejecutamos el contenido
 } catch(error) {
    res.status(500).json({ message: 'Error al crear post', error });
 }
});

// GET /api/posts -> obtener todos los posts

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener posts', error });
  }
});


module.exports = router;
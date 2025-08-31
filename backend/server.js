const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connection à MongoDB
mongoose.connect('mongodb://localhost:27017/gestionStandards', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur l API de gestion des données open standards');
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

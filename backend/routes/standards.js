const express = require('express');
const router = express.Router();
const Standard = require('../model/Standard');

// Ajouter un nouveau standard
router.post('/', async (req, res) => {
  const { nom, description } = req.body;
  const standard = new Standard({ nom, description });
  try {
    await standard.save();
    res.status(201).send(standard);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtenir tous les standards
router.get('/', async (req, res) => {
  try {
    const standards = await Standard.find();
    res.send(standards);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

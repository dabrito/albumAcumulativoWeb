var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Foto = require('../models').foto;

router.get('/findAll/json', function (req, res, next) {
  Foto.findAll({
    attributes: { exclude: ['updatedAt'] }
  }).then(fotos => {
    res.json(fotos);
  }).catch(err => res.json({ error: err }));
  // }).catch(err => res.status(400).send(err));

});

router.get('/findAll/view', function (req, res, next) {
  Foto.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
    .then(fotos => {
      res.render('fotos', { title: 'Fotos', arrFotos: fotos });
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
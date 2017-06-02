var express = require("express");
var auteur = express.Router();

auteur.get('/auteur/:id', function(req, res) {
  res.render("auteur", {
      id: Number(req.params.id),
      items: req.app.get('nieuwsFile').nieuws,
      categorieen: req.app.get('categorieenFile').categorieen,
      auteur: req.app.get('auteurFile').auteur
  });
});

module.exports = auteur;

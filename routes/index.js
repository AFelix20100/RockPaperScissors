var express = require('express');
var router = express.Router();
var RPS = require("../public/javascripts/RPS.js");


router.get('/check', function(req, res, next) {
  let rps = new RPS(); // Changez la variable à rps pour éviter la confusion avec le module RPS
  let userResponseIndex = parseInt(req.query.userResponse); // Convertir en entier
  let response = rps.beginAttack(userResponseIndex); // Appeler la méthode beginAttack
  // Stocker le résultat dans une variable globale
  global.response = response;

  // Rediriger vers la route /result
  res.redirect('/result');
});

router.get('/result', function(req, res, next) {
  // Récupérer le résultat stocké dans la variable globale
  let result = global.response;

  // Afficher le résultat dans la vue
  res.render('result', { result: result });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;

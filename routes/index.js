var express = require('express');
var router = express.Router();
const {models} = require("../models");
const sequelize = require("sequelize");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes', function(req, res, next) {
  models.quiz.findAll().
  then(quizzes=>{
  res.render('quizzes', { quizzes, title: "Quizzes" });})
});

module.exports = router;

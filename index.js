var express = require('express');
var bodyParser = require('body-parser');
var grades = require('./stud_grades');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/getAllStud', function(req,res) {
   var allStud = grades.getAllStud();
   res.json(allStud); 
});

app.get('/getStudById/:studId', function(req,res) {
   var studGrade = grades.getStudById(req.params.studId);
   res.json(studGrade); 
});

app.get('/getStudByYear/:year', function(req,res) {
   var studList = grades.getStudByYear(req.params.year);
   res.json(studList);
});

app.listen(port);
console.log('listening on port ' + port);

//----------Var declarations---------

//Random name generator
var Chance = require('chance');
var chance = new Chance();

//HTTP request parser
const bodyParser = require("body-parser");

//Parser JSON to XML
var xml = require('xml');

//Parser JSON to HTML
var json2html = require('html2json').json2html;

//-------------HTTP gestion----------

//Construction d'une app express acceptant les requêtes HTTP
var express = require('express');
var app = express();

//Pour les requêtes get avec uniquement un / dans l'url
app.get('/', function(req, res){
	res.send(generateMatrix());
	//res.send(generateStudents()); //uncomment for webcast's dynamic content
});

//Se mettre à l'écoute sur le port 3000
app.listen(3000, function(){
	console.log('Accepting HTTP requests on port 3000');
});

//Fonction pour contenu dynamique custom
function generateMatrix(){
	
	var size = chance.integer({
		min : 0,
		max : 10
	});
	
	var matrix = [];
	for(var line = 0; line < size; ++line){
		
		matrix[line] = new Array(size);
		
		for(var column = 0; column < size; ++column){
			matrix[line][column] = chance.integer({
				min : 0,
				max : 1
			});
		}
	}
	console.log(matrix);
	return matrix;
}


//Fonction pour contenu dynamique webcast
function generateStudents(){
	var numberOfStudents = chance.integer({
		min : 0,
		max : 10
	});
	console.log(numberOfStudents);
	var students = [];
	for(var i = 0; i< numberOfStudents; ++i){
		var gender = chance.gender();
		var birthYear = chance.year({
			min : 1986,
			max : 1996
		});
		students.push({
			firstName: chance.first({
				gender: gender
			}), 
			lastName: chance.last(),
			gender: gender,
			birthday: chance.birthday({
				year: birthYear
			})
		});
	}
	console.log(students);
	return students;
}


/*
function updateTime(){
	seconde++;
	if(!(seconde % 60)){
		minute++;
		seconde = 0;
	}
}

var timer = setInterval(updateTime(), 1000);

function setTime(){

}*/

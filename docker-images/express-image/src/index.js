//----------Var declarations---------

//Random name generator
var Chance = require('chance');
var chance = new Chance();

//Server HTTP
var express = require('express');
var app = express();

//HTTP request parser
const bodyParser = require("body-parser");

//Parser JSON to XML
var xml = require('xml');
var xmlString = xml(xmlObject, options);

//Parser JSON to HTML
var json2html = require('html2json').json2html;


//Var time
var seconde;
var minute;

//-----------Server gestion----------

app.use(bodyParser.json());

app.post("/", function (req, res) {
    console.log(req.body.user.name)
});

app.get('/', function(req, res){
	
	res.send(generateStudents());
});

/*
app.get('/', function(req, res){
	res.send(generateStudents());
});
*/

app.listen(3000, function(){
	console.log('Accepting HTTP requests on port 3000');
});

function updateTime(){
	seconde++;
	if(!(seconde % 60)){
		minute++;
		seconde = 0;
	}
}

var timer = setInterval(updateTime(), 1000);

function setTime(){

}


//--------Random name generator-----------
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
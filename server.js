

//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 
//setup express App
var app = express(); 

//setup PORT
var PORT = process.env.PORT || 8080; 


app.listen(PORT, function(){
	console.log("App is listening on PORT: " + PORT); 
}); 

//Use Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(bodyParser.json()); 


//Route for html and api routes 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

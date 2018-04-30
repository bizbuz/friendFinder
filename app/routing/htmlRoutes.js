

//require path for fullpath using dirname 
var path = require("path"); 

//export the HTML routes, one for survey, home  for everything else
module.exports  =  function(app) {
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html")); 
	}); 


	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html")); 
	});
};
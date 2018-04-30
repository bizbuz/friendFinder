

//Load the Data 
var friends = require("../data/friends");

//export the api routes function 
module.exports = function(app) {

	//get friend 
	app.get("/api/friends", function(req,res){
		res.json(friends);
	})

	//post data to friends.js 
	app.post("/api/friends", function(req, res){

		//create an object for the correct match 
		var match = {
			name = "",
			photo = "",
			difference = 100 
		}; 

		//get survey data and score from the survey submit request
		var data = req.body; 
		var score = data.score ; 

		//variable to store the difference of scores 
		var friendFinderDiff ; 

		//loop through each friend saved
		for(var i = 0 ; i < friends.length; i++){

			var currentFriend = friends[i]; 
			friendFinderDiff = 0 ; 

			//loop through each score of each friend and calculate the diff with each input score to get the total diff
			for(j= 0 ; j < currentFriend.scores.length; j++){
				var currentFriendScore = currentFriend.scores[j];
			    var currentUserScore = score[j];

			    friendFinderDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

			    //populate the values in the match object
			    if (friendFinderDiff <= match.friendDifference) {
			        
			        match.name = currentFriend.name;
			        match.photo = currentFriend.photo;
			        match.friendDifference = friendFinderDiff;
			      }

			}

		}

		//save the new data
		friends.push(data); 

		//return the match to display in modal
		res.json(match); 

	});
}; 
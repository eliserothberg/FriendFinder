// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});

// Array.prototype.compArr = function(array) {
//     var diff = [];
//     if (array != null && this.length == array.length) {
//         for (var i = 0; i < array.length; i++) {
//             newDiff = Math.abs(this[i] - array[i]);
//             diff.push(newDiff);
//         }
//     }

//     return diff;
// }

// var bob = [1, 2, 3, 4];
// var sam = [5, 6, 7, 8];
// var ed = [2, 5, 4, 8];
// var diff = ed.compArr(sam);
// console.log("diff = " + diff);

// // var totalDiff = diff.reduce(add, 0);

// var totalDiff = 0;
// for (var i=0; i < diff.length; i++){
//   totalDiff += diff[i];
// }
// console.log("totalDiff = " + totalDiff)


// var active = $('.productStatus[class*="active"]').val();
// alert(active);

// console.log("totalDiff survey = " + totalDiff);

app.post('/api/new', function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newFriend = req.body;

  console.log(newFriend);

  // We then add the json the user sent to the character array
  characters.push(newFriend);

  // We then display the JSON to the users
  res.json(newFriend);
});


// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8080,
//     user: "root",
//     password: "password",
//     database: "friendFinder_db"
// })

// connection.connect(function(err) {
//     if (err) throw err;
//     // console.log("connected as id " + connection.threadId);
//     start();
// })
// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers 
// (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores
//  against those from other users, question by question. 
//  Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: 
// no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
  
//   use Math.abs(3-5) or whatever in the parens


        //  connection.query("INSERT INTO Friends SET ?", {
        //   first_name: name,
        //   photo_link: photo,
        //   answer0: answer[0],
        //   answer1: answer[1],
        //   answer2: answer[2],
        //   answer3: answer[3],
        //   answer4: answer[4],
        //   answer5: answer[5],
        //   answer6: answer[6],
        //   answer7: answer[7],
        //   answer8: answer[8],
        //   answer9: answer[9],
        // }, 

// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, 
// display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.



// If you're just trying to finish up with the unique arrays, I would use a hash approach:

// var myArrays = [A,B,C,D,E,F,G],
//     uniques = [],
//     hashes = {};

// for (var i=0; i < myArrays.length; i++) {
//     var hash = JSON.stringify(myArrays[i]); // or .toString(), or whatever
//     if (!(hash in hashes)) {
//         hashes[hash] = true;
//         uniques.push(myArrays[i]);
//     }
// }
// uniques now holds all unique arrays


// app.get('/', function(req, res) {
//     res.sendfile(__dirname + '/survey.html');
// });

// Update MySQL database

// app.post('/users', function (req, res) {
//     connection.query('INSERT INTO users SET ?', req.body, 
//         function (err, result) {
//             if (err) throw err;
//             res.send('User added to database with ID: ' + result.insertId);
//         }
//     );
// });




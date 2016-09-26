//  contain two routes:

// A GET route with the url /api/friends. This will be used to display
//  a JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle 
// incoming survey results. This route will also be used to
// handle the compatibility logic.


// This will be used to handle 
// incoming survey results. This route will also be used to
// handle the compatibility logic.

var friendsData = require('../data/friends.js')
// var surveyData = require('../public/survey.html')

// ROUTING

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate Javascript array
  app.post('/api/friends', function (req, res) {
      

    var diff = [];
    // var bob = [1, 2, 3, 4];
    // var sam = [5, 6, 7, 8];
    // var ed = [2, 5, 4, 8];
    // var diff = ed.compArr(sam);
    // console.log("diff = " + diff);
    Array.prototype.compArr = function(array) {

      if (array != null && this.length == array.length) {
          for (var i = 0; i < array.length; i++) {
              newDiff = Math.abs(this[i] - array[i]);
              diff.push(newDiff);
              console.log("diff in = " + diff);

          }
      }

      return diff;
    }

    var totalDiff = 0;
    for (var i=0; i < diff.length; i++){
      totalDiff += diff[i];
    }

    console.log("totdiff out api-route = " + totalDiff);

    friendsData.push(req.body);
    console.log("api-route friendsData = " + friendsData.value);

    res.json(friendsData);
  });

};
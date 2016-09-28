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
var toCompare = [];

// ROUTING


module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  for (var i = 0; i< friendsData.length; i++) {
    toCompare = friendsData[i];
    console.log([i] + " = " + toCompare.name);
  }

  app.post('/api/friends', function (req, res) {
    friendsData.push(req.body);
    res.json(true);
    
    for (var i = 0; i< friendsData.length; i++) {
      toCompare = friendsData[i];
      console.log([i] + " = " + toCompare.name);
    }
  });    
};
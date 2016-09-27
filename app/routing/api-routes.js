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
// console.log("friendsData top of api = " + friendsData[1].name);
// console.log("friendsData length = " + friendsData.length);

// // var surveyData = require('../public/survey.html')

// for (var i = 0; i< friendsData.length; i++) {
//   toCompare = friendsData[i];
//   console.log("x = " + toCompare.name);
// }

//   console.log("outside toCompare = " + toCompare.name);


// ROUTING


module.exports = function (app) {
//  
  // API GET Requests
  // Below code handles when users "visit" a page.
  app.get('/api/friends', function (req, res) {

    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true); // KEY LINE
    // } else { // Or false if they don't have a table
    //   waitListData.push(req.body);
    //   res.json(false); // KEY LINE
    // }
    res.json(friendsData);
  });


    console.log("friendsData get  = " + friendsData[1].name);
console.log("get friendsData length = " + friendsData.length);

// var surveyData = require('../public/survey.html')

for (var i = 0; i< friendsData.length; i++) {
  toCompare = friendsData[i];
  console.log([i] + " = " + toCompare.name);
}
//only updates when click on api/friends
  console.log("in get toCompare = " + toCompare.name);


  // });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate Javascript array
  app.post('/api/friends', function (req, res) {
      

console.log("in post friends name = " + friendsData[1].name);
console.log("in post friendsData length = " + friendsData.length);

friendsData.push(req.body);
      res.json(true); // KEY LINE
    

for (var i = 0; i< friendsData.length; i++) {
  toCompare = friendsData[i];
  console.log([i] + " = " + toCompare.name);
}

  console.log("post toCompare = " + toCompare.name);
    var diff = [];
    var totalDiff = [];
    // console.log("toCompare name = " + toCompare.name);

    //  friendsData.push(req.body);
    // console.log("api-route friendsData = " + friendsData.value);

    // res.json(friendsData);
  });
    // var bob = [1, 2, 3, 4];
    // var sam = [5, 6, 7, 8];
    // var ed = [2, 5, 4, 8];
    // var diff = ed.compArr(sam);
    // console.log("diff = " + diff);
    // for (var i = 0; i < friendArray.length -1; i++) {
    //   var toCompare = (friendArray.length).name;
    //   var diff = toCompare.compArr(friendArray[i]);
      
      // console.log("toCompare = " + toCompare);
      // console.log("diff = " + diff[i]);


        // Array.prototype.compArr = function(array) {

        //   if (array != null && this.length == array.length) {
        //       for (var i = 0; i < array.length; i++) {
        //           newDiff = Math.abs(this[i] - array[i]);
        //           diff.push(newDiff);
        //           console.log("diff in = " + diff);

        //       }
        //   }

        //   return diff;
        // }

   


    //   var totalDiff = 0;
    //     for (var i=0; i < diff.length; i++){
    //       totalDiff += diff[i];
    //     }

    // alert("totdiff out api-route = " + totalDiff);

   

//     function compareFriends(){

//     // Here we get the location of the root page. 
//     // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
//     var currentURL = window.location.origin;

//     // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//     $.ajax({url: currentURL + "/api/friends", method: "GET"}) 
//       .done(function(FriendsData) {

//         // Here we are logging the URL so we have access to it for troubleshooting
//         console.log("------------------------------------");
//         console.log("URL: " + currentURL + "/api/friends");
//         console.log("------------------------------------");

//         // Here we then log the NYTData to console, where it will show up as an object.
//         console.log("friendsData again" + friendsData);
//         console.log("------------------------------------")

//         // Loop through and display each of the customers 
// //         for (var i=0; i<friendsData.length -1; i++){
// // // for (var i = 0; i < friendArray.length -1; i++) {
// //       var diff = toCompare.compArr(friendsData[i]);

// //         Array.prototype.compArr = function(array) {

// //           if (array != null && this.length == array.length) {
// //               for (var i = 0; i < array.length; i++) {
// //                   newDiff = Math.abs(this[i] - array[i]);
// //                   diff.push(newDiff);
                  

// //               }
// //               console.log("diff in = " + diff);
// //           }

// //           return diff;
// //         }
      
// //       console.log("toCompare still some in = " + toCompare.name);
// //       console.log("diff out = " + diff);
// //           // Create the HTML Well (Section) and Add the table content for each reserved table
          


// //           // Then display the remaining fields in the HTML (Section Name, Date, URL)
// //           // $("#tableWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
// //         }
//       // });
//   })
    // } 
    console.log("toCompare last = " + toCompare.name);
      // console.log("diff outside = " + diff[i]);
  // };

};
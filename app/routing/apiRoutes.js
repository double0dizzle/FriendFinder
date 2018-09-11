var friends = require("../data/friends")
console.log(friends);
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.send(friends);
  });

};


var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/index.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/logIn.html"));
  });

  app.get("/userPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/userPage.html"));
  });

  app.get("/itemPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/itemPage.html"));
  });

};

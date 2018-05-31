var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
      res.render("index");
    // res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/logIn.html"));
  });

  app.get("/userPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userPage.html"));
  });

  app.get("/itemPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/itemPage.html"));
  });

};

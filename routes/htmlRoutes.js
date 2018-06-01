var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
      res.render("index");
  });


  app.get("/login", function(req, res) {
    res.render("login");

  });

  app.get("/userPage", function(req, res) {
    res.render("user");
  });

  app.get("/itemPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/itemPage.html"));
  });

  app.get("/addItem", function(req, res) {
    res.render("addItem");
  });

  app.get("/checkout", function(req, res) {
    res.render("checkout");
  });

};

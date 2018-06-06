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

  app.get("/item", function(req, res) {
    res.render("item");
  });

  app.get("/addItem", function(req, res) {
    res.render("addItem");
  });

  app.get("/checkout", function(req, res) {
    res.render("checkout");
  });

  app.get("/search", function(req, res) {
    res.render("search");
  });


  app.get("/allItems", function(req, res) {
    res.render("allItems");
  });

  app.get("/searchItems", function(req, res){
    res.render("searchItems")
  })

  app.get("/createUser", function(req, res) {
    res.render("createUser");
  });

};


$(document).ready(function () {
  $('.carousel').carousel();
  $('.modal').modal();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration: 300
  });
   $('.sidenav').sidenav();

  //check local storage for email and password
  var currentEmail = localStorage.getItem("email")
  var currentPassword = localStorage.getItem("password")
  console.log("User Email: " + currentEmail);
  console.log("User Password: " + currentPassword);

  //our initial customer data array
  var customerData = [];
  userData();
  //test to see if a user is logged in
  function userData() {
    $.get("/api/customers", function (data) {
      customerData = data;
      console.log("TESTING FOR USER DATA");
      console.log(customerData);
    });
  }

  $featuredItemDiv = $("#featuredItems");



  // Our initial top sellers and featured items arrays
  var topSellingItem = [];
  var featuredItem = [];


  // Getting top selling from database when page loads
  getTopSelling();

  // This function grabs the top selling items and orders them DESC by totalSold
  function getTopSelling() {
    $.get("/api/items/ts", function (data) {
      topSellingItem = data;
      console.log("Testing for top selling data");
      console.log(topSellingItem);
      initializeTopSeller();
    });
  }


  $topSellingItemDiv = $("#topSellingItems");
  // This function populates the #topSellingItem carousel on the index.html page
  function initializeTopSeller() {
    // $featuredItem.empty();
    var rowsToAdd = [];
    for (var i = 0; i < topSellingItem.length; i++) {
      rowsToAdd.push(createNewRow(topSellingItem[i]));
      $featuredItemDiv.prepend(rowsToAdd);
    }
    // console.log("testing rowsToAdd");
    // console.log(rowsToAdd);
  }

  // Getting all featured items from the database when page loads
  getFeatured();

  function getFeatured() {
    console.log("hello world");
    $.get("/api/items/featured", function (data) {
      featuredItem = data;
      console.log("Testing featured data");
      console.log(featuredItem);
      // console.log(featuredItem[0].name);
      // console.log(featuredItem[0].price);
      // console.log(featuredItem[0].image);
      // initializeFeaturedItem();
    });
  }

  function initializeFeaturedItem() {};


  function createNewRow(topSellingItem) {
    // var $newInputRow = $(``
    // [
    // "<a class = 'carousel-item' href='#six!>",
    // "<img src=",
    // topSellingItem.image,
    // "></a>"
    // ].join("")
    // )
    // console.log("testing $newInputRow");
    // console.log($newInputRow);
  };



});
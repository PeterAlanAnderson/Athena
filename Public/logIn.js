$(document).ready(function () {


    function userData() {
        $.get("/api/customer/user", function(data) {
          customerData = data;
          console.log("TESTING FOR DATA");
          console.log(customerData);
          // console.log(topSellingItem[0].name);
          // console.log(topSellingItem[0].price);
          // console.log(topSellingItem[0].image);

        });
      }


    var currentEmail = localStorage.getItem("email")
    var currentPassword = localStorage.getItem("password")
    console.log("User Email: " + currentEmail);
    console.log("User Password: " + currentPassword);





    $("#formLogin").submit(function (event) {
        event.preventDefault();
        var newUserEmail = $("#email").val();
        var newUserPW = $("#password").val();
        console.log("User Email: " + newUserEmail)
        console.log("User Password: " + newUserPW)
        $("#email").val('');
        $("#password").val('');
        localStorage.setItem("email", newUserEmail);
        localStorage.setItem("password", newUserPW);
    })

//***********************************************************
//                    HERE THERE BE TEST DATA
    // var customers = [];
    // var user1 = {
    //   name: "peter",
    //   username: "also peter",
    //   password: "password",
    //   vendor: false,
    //   storeName: "my store",
    //   likedTags: "puppies, puppies, puppies"
    // }
    //
    // function getUsers() {
    //   $.get("/api/customers",function(data){
    //     customers = data;
    //     console.log("got here!")
    //     console.log(customers)
    //   })
    // }
    //
    // function createUser(NewUser){
    //   $.post("/api/customer", NewUser, getUsers);
    // }
    //
    // createUser(user1)

});

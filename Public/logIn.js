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

});
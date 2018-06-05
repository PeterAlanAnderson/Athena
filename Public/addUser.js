$(document).ready(function () {


    // $("#password, #password_confirm").on("keyup", function () {
    //     if ($("#customerPassword").val() == $("#password_confirm").val()) {
    //         $("#password_message").html("Password Matching").css("color", "green");
    //     } else 
    //         $("#password_message").html("Password Not Matching").css("color", "red")
    // });

    function getUsers() {
        $.get("/api/customers",function(data){
          customers = data;
          console.log("got here!")
          console.log(customers)
        })
      }

    function createUser(NewUser){
    $.post("/api/customer", NewUser, getUsers).then(function(){
        window.location.href = "/userPage"
    });
    }




    $("#submitUserInfo").on("click" ,function (event) {
        event.preventDefault(); 
        customerName = ($("#customerName").val().trim());
        customerUserName = ($("#customerUserName").val().trim());
        customerPassword = ($("#customerPassword").val().trim());
        customerEmail = ($("#customerEmail").val().trim());



        console.log(customerName);
        console.log(customerEmail)
        console.log(customerUserName);
        console.log(customerPassword);

        var Customer = {
            name: customerName,
            email: customerEmail,
            username: customerUserName,
            password: customerPassword,
            vendor: false,
            storeName: "store",
            likedTags: ""
        };
        sessionStorage.setItem("userEmail", customerEmail)
        sessionStorage.setItem("isLoggedIn", "true")

        console.log(Customer)   
        createUser(Customer)  
        


    })


});



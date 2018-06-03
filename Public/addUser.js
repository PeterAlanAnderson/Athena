   $(document).ready(function () {


   // $(this).validate({
   //      rules : {
   //          password : {
   //              minlength : 5
   //          },
   //          password_confirm: {
   //              minlength : 5,
   //              equalTo : '[name="password"]'
   //          }

   //      },
   // })



    $("#submitUserInfo").on("click" ,function (event) {


   //       $(this).validate({
   //      rules : {
   //          password : {
   //              minlength : 5
   //          },
   //          password_confirm: {
   //              minlength : 5,
   //              equalTo : '[name="password"]'
   //          }

   //      },
   // })


        event.preventDefault();
        first_name = ($("#first_name").val().trim());
        last_name = ($("#last_name").val().trim());
        userName = ($("#userName").val().trim());
        password = ($("#password").val().trim());



        // itemDescription = ($("#itemDescription").val().trim());
        // itemPrice = ($("#price").val().trim());
        // itemUrl = ($("#itemPhoto").val().trim());

        console.log(first_name);
        console.log(last_name);
        console.log(userName);
        console.log(password);




// var newItem = {
//     name: first_name,
//     username: itemDescription,
//     password: itemPrice,
//     image: itemUrl
//   };

// console.log("var newItem = ")
// console.log(newItem);

// $.post("/api/item")

 })


});
 

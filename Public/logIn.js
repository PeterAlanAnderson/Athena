$(document).ready(function () {
//WUMBO!!

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





    $("#submit").on("click",function (event) {
        event.preventDefault();
        console.log("click")
        email = "peter.alan.anderson@gmail.com"
        password = "puppies"
        checkLogin(email, password)


        // var newUserEmail = $("#email").val();
        // var newUserPW = $("#password").val();
        // console.log("User Email: " + newUserEmail)
        // console.log("User Password: " + newUserPW)
        // $("#email").val('');
        // $("#password").val('');
        // let userInfoCorrect = false;
        // checkLogin(newUserEmail, newUserPW)
        // console.log(userInfoCorrect)



    })

    function checkLogin(email, password){
      console.log(email,password)
      $.get("/api/customer/"+email, function(data){
        let checkPassword = data.password
        console.log(data.password)
        if (checkPassword == password){
          localStorage.setItem("userData", JSON.stringify(data))
          localStorage.setItem("loggedIn", "true")
          $.get("/userPage", function(){})
        } else {
          alert("Invalid username/password combination")
          return false;
        }

      })
    }

//***********************************************************
//                    HERE THERE BE TEST DATA
    // var customers = [];
    // var user1 = {
    //   name: "peter",
    //   username: "peter.alan.anderson@gmail.com",
    //   password: "puppies",
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
    //
    // var items = [];
    // var testItem = {
    //     name: "Test Item",
    //     description: "This item is for testing purposes only",
    //     quantity: 20,
    //     auction: false,
    //     price: 175.49,
    //     image: "https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png",
    //     category: "electronics",
    //     featured: true,
    //     totalSold: 2,
    //     tags: "electronics, cool, essential",
    //     owner: 1
    // };
    //
    // function getItems(){
    //     $.get("/api/items", function (data){
    //         items = data;
    //         console.log("this is a test item");
    //         console.log(items)
    //     })
    // }
    // function createItem(NewItem) {
    //     $.post("/api/item", NewItem, getItems)
    // };
    // createItem(testItem);
});

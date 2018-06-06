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


    // var currentEmail = localStorage.getItem("email")
    // var currentPassword = localStorage.getItem("password")
    // console.log("User Email: " + currentEmail);
    // console.log("User Password: " + currentPassword);





    $("#submit").on("click",function (event) {
        event.preventDefault();
        console.log("click")
        let email = $("#email").val()
        let password = $("#password").val()
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
      let loginDetails = {
        emailAddress: email,
        pwdin: password
      }
      console.log(loginDetails)
      // localStorage.setItem("emailAddress", emailAddress)
      $.ajax({
        url: "/api/login",
        type: "PATCH",
        data: loginDetails
      }).then(function(data){
        if(data == "false"){
          alert("You have entered an incorrect username/password combination.  Please try again.")
        } else {
          sessionStorage.setItem("userEmail", email)
          sessionStorage.setItem("isLoggedIn", "true")
          window.location.href = "/userPage"
        }
        // localStorage.setItem("userName", null)



        // let checkPassword = data.password
        // console.log(data.password)
        // if (checkPassword == password){
        //   localStorage.setItem("userData", JSON.stringify(data))
        //   localStorage.setItem("loggedIn", "true")
          // $.get("/userPage", function(){})
        // } else {
        //   alert("Invalid username/password combination")
        //   return false;
        // }

      })
    }

//***********************************************************
//                    HERE THERE BE TEST DATA

  //   var customers = [];
  //   var user1 = {
  //     name: "Peter Anderson",
  //     email: "peter.alan.anderson@gmail.com",
  //     username: "peterName",
  //     password: "puppies",
  //     vendor: false,
  //     storeName: "my store",
  //     likedTags: "puppies, puppies, puppies"
  //   }

  //   var user2 = {
  //     name: "Moe Hatab",
  //     email: "moe@moe.com",
  //     username: "bigmoe",
  //     password: "moe",
  //     vendor: false,
  //     storeName: "ShopMoe",
  //     likedTags: "puppies, puppies, puppies"
  //   }

  //   var user3 = {
  //     name: "Al Gore",
  //     email: "algore@government.com",
  //     username: "AwesomeAl",
  //     password: "excelsior",
  //     vendor: false,
  //     storeName: "Al Mart",
  //     likedTags: "Al Gore"
  //   }


  //   function getUsers() {
  //     $.get("/api/customers",function(data){
  //       customers = data;
  //       console.log("got here!")
  //       console.log(customers)
  //     })
  //   }
  //   function createUser(NewUser){
  //     $.post("/api/customer", NewUser, getUsers);
  //   }
  //   createUser(user1)
  //   createUser(user2)
  //   createUser(user3)
  //   var items = [];
  //   var testItem = {
  //       name: "Pizza",
  //       description: "This pizza is a good ol' fashioned pizza for eating yum yum!",
  //       quantity: 20,
  //       auction: false,
  //       price: 6.49,
  //       image: "https://target.scene7.com/is/image/Target/51226551_Alt01?wid=520&hei=520&fmt=pjpeg",
  //       category: "food",
  //       featured: true,
  //       totalSold: 2,
  //       tags: "food, comfort food, cheese",
  //       owner: 1
  //   };
  //   var testItem2 = {
  //       name: "Taco Cat",
  //       description: "Part taco, part cat, all fun!",
  //       quantity: 20,
  //       auction: false,
  //       price: 200,
  //       image: "http://photos.costume-works.com/x3/taco_cat.jpg",
  //       category: "pets",
  //       featured: true,
  //       totalSold: 2,
  //       tags: "pet, pets, cat, food, mexican food",
  //       owner: 1
  //   };
  //   var testItem3 = {
  //       name: "Bike",
  //       description: "This is a kids mountain bike",
  //       quantity: 20,
  //       auction: false,
  //       price: 275.25,
  //       image: "https://s7d2.scene7.com/is/image/dkscdn/17GTXMBNKXXXXXXXXBMX_Green/?$DSG_ProductCard$",
  //       category: "outdoors",
  //       featured: true,
  //       totalSold: 2,
  //       tags: "bike, transportation, outdoors, exercise",
  //       owner: 1
  //   };
  //   var testItem4 = {
  //      name: "Crunchy Logs",
  //      description: "Kellog's cereal box from 1978, unopened.",
  //      quantity: 1,
  //      auction: false,
  //      price: 44,
  //      image:"https://i.pinimg.com/736x/7d/7f/e3/7d7fe3d2b47ef2ad4d795ef5ff1204fe--school-breakfast-breakfast-cereal.jpg",
  //      category: "food",
  //      featured: true,
  //      totalSold: 0,
  //      tags: "food, antiques",
  //      owner: 2
  //  };
  //  var testItem5 = {
  //      name: "Retro Pepsi Bottles",
  //      description: "Set of 3 replica pepsi bottles from the 1980's.  Limited Edition. Unopened",
  //      quantity: 1,
  //      auction: false,
  //      price: 18,
  //      image: "https://ssli.ebayimg.com/images/g/LUUAAOSwHnFVtZ7g/s-l640.jpg",
  //      category: "food",
  //      featured: true,
  //      totalSold: 1,
  //      tags: "food, soda, antique",
  //      owner: 1
  //  };
  // var testItem6 = {
  //      name: "Hammock",
  //      description: "It's like a net in a tree you sleep in!",
  //      quantity: 1,
  //      auction: false,
  //      price: 40,
  //      image: "https://thediylighthouse.com/wp-content/uploads/2016/05/Screen-Shot-2018-01-30-at-11.03.11-AM.png",
  //      category: "outdoors",
  //      featured: true,
  //      totalSold: 1,
  //      tags: "net, outdoors, tree, fun, sleep",
  //      owner: 1
  //  };
  // var testItem7 = {
  //     name: "Alien Chestburster Costume Prop",
  //     description: "Custom Alien chestburster for use in a costume.  3D printed.",
  //     quantity: 1,
  //     auction: false,
  //     price: 34,
  //     image: "https://img.etsystatic.com/il/6ad128/956387466/il_570xN.956387466_d56c.jpg?version=0",
  //     category: "clothing",
  //     featured: true,
  //     totalSold: 1,
  //     tags: "clothing, costume",
  //     owner: 1
  // };

  //   function getItems(){
  //       $.get("/api/items", function (data){
  //           items = data;
  //           console.log("this is a test item");
  //           console.log(items)
  //       })
  //   }
  //   function createItem(NewItem) {
  //       $.post("/api/item", NewItem, getItems)
  //   };
  //  createItem(testItem);
  //  createItem(testItem2);
  //  createItem(testItem3);
  //  createItem(testItem4);
  //  createItem(testItem5);
  //  createItem(testItem6);
  //  createItem(testItem7);

});

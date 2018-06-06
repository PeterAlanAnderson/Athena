$(document).ready(function () {
    // console.log("page loaded");
    // console.log("currently logged in as: " + localStorage.getItem("email"));
    var customerData = [];
    var customerUserName;
    var customerID;
    userData();
    //test to see if a user is logged in
    function userData() {
        $.get("/api/customers", function (data) {
            customerData = data;
            // console.log("TESTING FOR USER DATA");
            // console.log(customerData);

            for (i = 0; i < customerData.length; i++) {
                if (customerData[i].email === localStorage.getItem("email")) {
                    customerUserName = customerData[i].username;
                    customerID = customerData[i].id;
                }
            }
            // console.log(customerUserName);
            // console.log(customerID);
        });
    }

    $("#submitItem").on("click", function (event) {
        event.preventDefault();
        itemName = ($("#itemName").val().trim());
        itemDescription = ($("#itemDescription").val().trim());
        itemQuantity = ($("#itemQuantity").val().trim());
        itemPrice = ($("#price").val().trim());
        itemUrl = ($("#itemPhoto").val().trim());
        // userEmail = localStorage.getItem("email");


        var newItem = {
            name: itemName,
            description: itemDescription,
            quantity: itemQuantity,
            price: itemPrice,
            image: itemUrl,
            // email: userEmail,
            //this needs to be linked to the owner/currently logged in user
           
            // need to either add code for this or inputs on the form to be able to add to a new item.  
            //  should be able to get the owner info from checking the email in the local storage.
           
            owner: customerID
        };
        console.log(newItem)

        // console.log("var newItem = ")
        // console.log(newItem);

        // $.post("/api/item", newItem)
        //     // on success, run this callback
        //     .then(function (data) {
        //         console.log(data);
        //         itemReset();
        //     })
    });

    function itemReset() {
        // ($("#itemName").val(''));
        // ($("#itemDescription").val(''));
        // ($("#price").val(''));
        // ($("#quantity").val(''));
        // ($("#itemPhoto").val(''));
    }
});
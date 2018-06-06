$(document).ready(function(){
    const userEmail = sessionStorage.userEmail
    let name = ""
    let address = "This isn't something we gather at this time"
    let vendorName = ""
    let balance = 0
    let userID =""
    console.log(userEmail)
    $.get("/api/customeremail/"+userEmail).then(function(data){
        console.log(data)
        name = data.name;
        
        $("#userTitle").text(name)
        $("#userImage").attr("src","http://cdn.bgr.com/2015/04/strong-bad-email.png")
        $("#name").text(name)
        $("#username").text(data.username)
        $("#address").text(address)
        $("#email").text(userEmail)
        $("#revenue").append(data.balance)
        userID = data.id

        if (data.vendor){
            $("#vendorName").text(data.vendorName)
        } else {

        }


    })
    $("#createItem").on("click", function (event) {
        event.preventDefault();
        itemName = ($("#itemName").val().trim());
        itemDescription = ($("#itemDescription").val().trim());
        itemQuantity = ($("#itemQuantity").val().trim());
        itemPrice = ($("#price").val().trim());
        itemUrl = ($("#itemPhoto").val().trim());
        customerID = userID;
        // userEmail = localStorage.getItem("email");
        var newItem = {
            name: itemName,
            description: itemDescription,
            quantity: itemQuantity,
            price: itemPrice,
            image: itemUrl,
            owner: customerID
        };
        console.log("var newItem = ")
        // console.log(newItem);
        $.post("/api/item", newItem)
            // on success, run this callback
            .then(function (data) {
                console.log(data);
                itemReset();
            })
    });
    function itemReset() {
        ($("#itemName").val(''));
        ($("#itemDescription").val(''));
        ($("#price").val(''));
        ($("#itemQuantity").val(''));
        ($("#itemPhoto").val(''));
    }


})
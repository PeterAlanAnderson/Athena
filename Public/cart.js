var itemQuant;
var oldQuant;
const localStorageItems = [];

$(document).ready(function () {

    function checkCart() {
        localStorageItems.push(JSON.parse(localStorage.getItem('shoppingCart')));
        var cartTotal = 0;
        for (j < 0; j < localStorageItems.length; j++) {

            $("#cartItemName").val(localStorageItems[i].name);
            $("#cartItemPrice").val(localStorageItems[i].price);
            cartTotal = +localStorageItems[i].price;
        }
        $("#cartTotal").val(cartTotal)
    }

    $("#addToCart").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("data");
        console.log(id);

        $.get("/api/items/" + id, function (items) {
            console.log(items);
            localStorageItems.push(items);
            console.log(localStorageItems);
            var stringifiedArray = [];

            function stringify() {
                for (i = 0; i < localStorageItems.length; i++) {
                    stringifiedArray.push(JSON.stringify(localStorageItems[i]));
                }
                localStorage.setItem('shoppingCart', stringifiedArray);
            };

            res.render("main", items);
            // checkCart();
        })
    });

    //************* post purchase log on checkout

    $("#placeOrder").on("click", function () {
        for (k < 0; k < localStorage.length; k++) {
            var cartItemId = localStorageItems[i].id;
            var newLog = {
                purchaseId: Date.UTC(),
                itemId: cartItemId,
                quantity: 1,
                date: Date.now()
            }
            $.post("/api/purchaseLog", newLog, function (data) {
                console.log(data);
                console.log("purchageLog created");
            })
        }
    })
})

// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
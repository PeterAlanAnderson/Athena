var itemQuant;
var oldQuant;
const localStorageItems = [];

$(document).ready(function () {

function checkCart () {
    localStorageItems.push(JSON.parse(localStorage.getItem('shoppingCart')));
    for (j < 0 ; j < localStorageItems.length; j++){
        $("#cartItemName").val(localStorageItems[i].name);
        $("#cartItemPrice").val(localStorageItems[i].price)
        var cartTotal =+ localStorageItems[i].price
        $("#cartTotal").val(cartTotal)
    }
}

$("#addToCart").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);

    $.get("/api/items/" + id, function(items) {
        console.log(items);
        localStorageItems.push(items);
        console.log(localStorageItems);
        var stringifiedArray = [];
        function stringify(){
            for (i = 0; i < localStorageItems.length; i++){
                stringifiedArray.push(JSON.stringify(localStorageItems[i]));
            }
            localStorage.setItem('shoppingCart', stringifiedArray);
        };

        res.render("main", items);
    })
});
})

// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
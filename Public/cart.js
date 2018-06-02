var itemQuant;
var oldQuant;
const localStorageItems = [];

$(document).ready(function () {

function checkCart () {
    localStorageItems.push(JSON.parse(localStorage.getItem('shoppingCart')));
}

$("#addToCart").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);

    $.get("/api/items/" + id, function(data) {
        console.log(data);
        localStorageItems.push(data);
        console.log(localStorageItems);
        var stringifiedArray = [];
        function stringify(){
            for (i = 0; i < localStorageItems.length; i++){
                stringifiedArray.push(JSON.stringify(localStorageItems[i]));
            }
        };
        localStorage.setItem('shoppingCart', stringifiedArray);

        res.render("main", data);
    })
});
})

// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
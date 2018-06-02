var itemQuant;
var oldQuant;
const localStorageItems = [];

$(document).ready(function () {

    
$("#addToCart").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);

    $.get("/api/items/" + id, function(data) {
        console.log(data);
        localStorageItems.push(data);
        console.log(localStorageItems);
        var stringifiedArray = [];
        var stringify = function (){
            for (i = 0; i < localStorageItems.length; i++){
                stringifiedArray.push(JSON.stringify(localStorageItems[i]));
            }
        };
        localStorage.setItem(stringifiedArray);

        res.render("main", data);
    })
});
})
// $("#placeOrder").on("click", function (event){
//     event.preventDefault();
//     var id = $(this).data("id")
//     var retrievedItem = JSON.parse(localStorage.getItem('itemToCart'));
//     var newQuant = oldQuant - itemQuant
//     $.ajax("/api/item/"+id, {
//         type: "PUT",
//         data: newQuant
//     }).then(function(res){
//         console.log("quantity updated");
//         res.render('checkout', retrievedItem);
//         alert("Your shipment is being prepared!")
//     }) 
// });

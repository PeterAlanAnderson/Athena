
var itemQuant;
var oldQuant;

$("#addToCart").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id")
    var itemToCart = {
        item: items
    };
    $.ajax("api/items/" + id, {
        type: "GET",
        data: items
    }).then( function(data) {
        console.log(data);
        localStorage.setItem('itemToCart', JSON.stringify(data));
        $("#total").TEXT(data.price * itemQuant);
        oldQuant = data.quantity
        res.render("main", data)
    })
});

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

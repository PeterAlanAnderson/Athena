$(document).ready(function(){
    var itemQuant;
    var oldQuant;
    const localStorageItems = [];
    $.get("/api/items", function(data) {
        console.log("ALL ITEMS");
        console.log(data)
        let cards = ""
        for(var i=0; i < data.length; i++)
        {
            console.log("working on",data[i])
            let itemCard = '<div class="col s4"><div class="card small hoverable z-depth-4" id="itemCard"><div class="card-image waves-effect waves-block waves-light">'
            itemCard += '<a href="/item"><img class"responsive-img" id="cardImage"src="'
            itemCard += data[i].image
            itemCard += '"></a></div>'
            itemCard += '<div class="card-content"><span class="card-title activator grey-text text-darken-4">'
            itemCard += data[i].name 
            itemCard +='<i class="material-icons right">more_vert</i></span><button class="btn indigo lighten-2 waves-effect waves-light addToCart" data="'
            itemCard += data[i].id
            itemCard += '">Add To Cart<i class="material-icons right">add_box</i></button></div>'
            itemCard += '<div class="card-reveal"><span id="cardTitle" class="card-title grey-text text-darken-4">'    
            itemCard += data[i].name 
            itemCard += '<i class="material-icons right">close</i></span><p id="itemDescription">'
            itemCard += data[i].description
            itemCard += '</p><h6>Price: $'
            itemCard += data[i].price
            itemCard += '</h6></div></div></div>'
            console.log(itemCard)

            $("#itemsContainer").append(itemCard)
            
            // console.log(data[i]);  
            // $('#cardTitle').html(data[i].name);
            // $('#itemDescription').html(data[i].description);
            // $('#image').attr("src", data[i].image);
        }
        
    }).then(function(){
        $(".addToCart").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr("data");
            console.log(id);
    
            $.get("/api/items/" + id, function (data) {
                console.log(data);
                var cartItem = {
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    imageUrl: data.image,
                    owner: data.owner
                }
                localStorageItems.push(cartItem);
                console.log(`cart item: ${cartItem.id}, ${cartItem.name}, ${cartItem.price}, ${cartItem.imageUrl}`)
                console.log(`local storage array: ${localStorageItems}`);
                var stringifiedArray = [];
    
                function stringify() {
                    for (let i = 0; i < localStorageItems.length; i++) {
                        stringifiedArray.push(JSON.stringify(localStorageItems[i]));
                        console.log(`stringified array : ${stringifiedArray}`)
                        localStorage.setItem('shoppingCart', stringifiedArray);
                        console.log("local storage: " + localStorage.shoppingCart)
                    }
                    
                };
                stringify();
    
                // res.render("main", items);
                // checkCart();
            })
        });
    });
//     function checkCart() {
//         var parsedStorage = JSON.parse(localStorage.getItem('shoppingCart'))
//         localStorageItems.push(parsedStorage);
//         var cartTotal = 0;
//         if(localStorageItems.length = 0 ){
//             console.log("cart is empty")
//         }else {
//         for (let i = 0; i < localStorageItems.length; i++) {
//             var newCartDiv = $("<div id='listDiv'><img id='imageCart' src=''><ul><li id='cartItemName'></li><li id='cartItemPrice'></li></ul></div>");
//             $('#imageCart').attr("src", localStorageItems[i].imageUrl)
//             $("#cartItemName").html(localStorageItems[i].name);
//             $("#cartItemPrice").html(localStorageItems[i].price);
//             cartTotal = +localStorageItems[i].price;
//             $("#cartDiv").append(newCartDiv);
//         }
//         $("#cartTotal").html(cartTotal)
//         // console.log(cartTotal)
//     }
// }
// checkCart();
    
});
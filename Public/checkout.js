$(document).ready(function () {

    function checkCart() {
        let localStorageItems = [];
        console.log(localStorage.shoppingCart)
        var getCart = localStorage.getItem('shoppingCart');
        console.log(getCart);

        var notParsedCart = getCart.split(",{");
            for(let q = 1; q < notParsedCart.length; q++){
               notParsedCart[q] = "{" + notParsedCart[q];
            }
            console.log(notParsedCart)

            for( let p = 0; p < notParsedCart.length; p++){
                localStorageItems.push(JSON.parse(notParsedCart[p]))
            }

            console.log(localStorageItems)
            var cartTotal = 0;
            for (var i = 0; i < localStorageItems.length; i++) {
                var newCartDiv = '<div><img class="imageCart" src="'
                newCartDiv += localStorageItems[i].imageUrl
                newCartDiv += '"><ul><li class="cartItemName">'
                newCartDiv += localStorageItems[i].name
                newCartDiv += '</li><li class="cartItemPrice">'
                newCartDiv += localStorageItems[i].price
                newCartDiv += '</li>'
                cartTotal += parseInt(localStorageItems[i].price);
                console.log("cart total: "+cartTotal)
                console.log(newCartDiv)
                $("#cartDiv").append(newCartDiv);
            }
            console.log(cartTotal)
            $("#cartTotal").val(cartTotal)
        }
checkCart();
});

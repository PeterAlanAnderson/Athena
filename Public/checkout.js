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

            for( let p = 0; p < notParsedCart.length; p++){
                localStorageItems.push(JSON.parse(notParsedCart[p]))
            }

            console.log(localStorageItems)
            var cartTotal = 0;
            for (var i = 0; i < localStorageItems.length; i++) {
                var newCartDiv = $("<div><img class='imageCart' src=''><ul><li class='cartItemName'><li class='cartItemPrice'>");
                $('.imageCart').attr("src", localStorageItems[i].imageUrl)
                $(".cartItemName").text(localStorageItems[i].name);
                $(".cartItemPrice").text(localStorageItems[i].price);
                cartTotal = +localStorageItems[i].price;
                $("#cartDiv").append(newCartDiv);
            }
            console.log(cartTotal)
            $("#cartTotal").val(cartTotal)
        }
checkCart();
});

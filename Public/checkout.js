$(document).ready(function () {
    const localStorageItems = [];

    function checkCart() {
        console.log(localStorage.shoppingCart)
        var getCart = localStorage.getItem('shoppingCart');
        console.log(getCart);

        var notParsedCart = getCart.split(",{");
        for (let q = 1; q < notParsedCart.length; q++) {
            notParsedCart[q] = "{" + notParsedCart[q];
        }
        console.log(notParsedCart)

        for (let p = 0; p < notParsedCart.length; p++) {
            localStorageItems.push(JSON.parse(notParsedCart[p]))
        }

        console.log(localStorageItems)
        var cartTotal = 0;
        for (var i = 0; i < localStorageItems.length; i++) {
            var newCartDiv = '<div class="itemCart row"><div class="col s7"><img class="imageCart responsive-img" style="width: 30%" src="'
            newCartDiv += localStorageItems[i].imageUrl
            newCartDiv += '"></div><div class="col s5"><ul><li class="cartItemName">'
            newCartDiv += "Item: " + localStorageItems[i].name
            newCartDiv += '</li><li class="cartItemPrice">'
            newCartDiv += "Price: $" + localStorageItems[i].price
            newCartDiv += '</li></ul>'
            newCartDiv += '</div>'
            cartTotal += parseInt(localStorageItems[i].price);
            console.log("cart total: " + cartTotal)
            console.log(newCartDiv)
            $("#cartDiv").append(newCartDiv);
        }
        console.log(cartTotal)
        $("#cartTotal").html(`Your Total: $${cartTotal}`)
    }

    checkCart();
    console.log("LSI:" +localStorageItems)

    // Posting a new purchase log********************************************************************************8
    $("#placeOrder").on("click", function (event) {
        event.preventDefault();
        for (var i = 0; i < localStorageItems.length; i++) {
            var cartItemId = localStorageItems[i].id;
            var newLog = {
                purchaseId: Date.UTC(),
                itemId: cartItemId,
                quantity: 1
            }
            $.post("/api/purchaseLog", newLog).then(function (data) {
                console.log(data);
                console.log("purchageLog created");
            })
        }

        let originalBalance = 0;
        let itemsToBuy = localStorageItems
        buyItems(itemsToBuy)
    })

    function buyItems(items){
        if(items.length<1){
            return
        } else {
        let i = items.pop()
        console.log(items)
        $.get("/api/customer/"+i.owner).then(function(custData){
            $.get("/api/items/"+i.id).then(function(itemData){
                let newQuantity = parseInt(itemData.quantity) - 1
                let newBalance = parseInt(custData.balance) + parseInt(i.price)
                $.ajax({
                    method:"PUT",
                    url: "/api/item/"+i.id,
                    data: {quantity : newQuantity}
                }).then(function(data){
                    $.ajax({
                        method: "PUT",
                        url: "/api/customer/"+i.owner,
                        data: {balance : newBalance}    
                    }).then(function(data){buyItems(items)})
                })
            })
            
            
        })
        return
        }
    
    }



        // for (let j = 0; j < localStorageItems.length; j++) {
        //     console.log("looping")
        //     // let originalBalance = 0;
        //     let storedItemId = parseInt(localStorageItems[j].id);
        //     let storedCustomerId = parseInt(localStorageItems[j].owner);
        //     let storedItemPrice = parseInt(localStorageItems[j].price);
        //     console.log(storedCustomerId, storedItemId, storedItemPrice)
        //     $.get("/api/customer/" + storedCustomerId).then(function (data) {
        //         originalBalance = data.balance
        //         console.log("original balance" + originalBalance);
        //         let newBalance = originalBalance + storedItemPrice
        //         updateBalance(storedCustomerId, newBalance);
        //     })
            
            

            
        // }
    // });

    function updateBalance(ID, newBalance) {
        // console.log(newBalance)
        $.ajax({
            method: "PUT",
            url: "/api/customer/" + ID,
            data: {balance : newBalance}
        }).then(console.log("balance updated"))
    }

});
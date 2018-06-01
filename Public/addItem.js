    $("#addItemForm").submit(function (event) {
        event.preventDefault();
        itemName = ($("#itemName").val().trim());
        itemDescription = ($("#itemDescription").val().trim());
        itemPrice = ($("#price").val().trim());
        itemUrl = ($("#itemPhoto").val().trim());
console.log(itemName);
console.log(itemDescription);
console.log(itemPrice);
console.log(itemUrl);

var newItem = {
    name: itemName,
    description: itemDescription,
    price: itemPrice,
    image: itemUrl
  };

console.log("var newItem = ")
console.log(newItem);

$.post("/api/item")
    });

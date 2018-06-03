
$.get("/api/items", function(data) {
    console.log("ALL ITEMS");
    for(var i=0; i < data.length; i++)
    {
        console.log(data[i]);  
    }
    //$('li').html("")
})

// $(document).ready(function () {
//     console.log("here23");
//     var itemsData = {};
//     $.ajax("/api/items", {
//         type: "GET", 
//         data: ItemsData
        
//     }).then(
//         function() {
//             console.log("got into the then");
//             // 
//             console.log(itemsData);
//         }
//     );
//     });
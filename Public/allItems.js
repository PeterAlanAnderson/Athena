$(function(){
    $.get("/api/items", function(data) {
        console.log("ALL ITEMS");
        for(var i=0; i < data.length; i++)
        {
            console.log(data[i]);  
            $('#cardTitle').html(data[i].name);
            $('#itemDescription').html(data[i].description);
            $('#image').attr("src", data[i].image);
        }
        
    });
});
$(document).ready(function(){
    let category = sessionStorage.getItem("category")
    console.log(category)
    $.get("/api/search/"+category, function(data) {
        console.log("SEARCHED ITEMS");
        console.log(data)
        let cards = ""
        for(var i=0; i < data.length; i++)
        {
            console.log("working on",data[i])
            let itemCard = '<div class="card small medium hoverable col s4" id="itemCard"><div class="card-image waves-effect waves-block waves-light">'
            itemCard += '<a href="/item"><img class"responsive-img" id="cardImage"src="'
            itemCard += data[i].image
            itemCard += '"></a></div>'
            itemCard += '<div class="card-content"><span class="card-title activator grey-text text-darken-4">'
            itemCard += data[i].name 
            itemCard +='<i class="material-icons right">more_vert</i></span><button class="btn indigo lighten-2 waves-effect waves-light" id="addToCart" data="'
            itemCard += data[i].id
            itemCard += '>Add To Cart<i class="material-icons right">add_box</i></button></div>'
            itemCard += '<div class="card-reveal"><span id="cardTitle" class="card-title grey-text text-darken-4">'    
            itemCard += data[i].name 
            itemCard += '<i class="material-icons right">close</i></span><p id="itemDescription" class="indigo">'
            itemCard += data[i].description
            itemCard += '</p><h6>Price: $'
            itemCard += data[i].price
            itemCard += '</h6></div></div>'
            console.log(itemCard)

            $("#itemsContainer").append(itemCard)
        
            // console.log(data[i]);  
            // $('#cardTitle').html(data[i].name);
            // $('#itemDescription').html(data[i].description);
            // $('#image').attr("src", data[i].image);
        }
        
    });
});
$(document).ready(function(){
    $("#searchButton").on("click", function(event){
        console.log("click!")
        event.preventDefault();
        let category = $("#searchBox").val()
        console.log(category)
        sessionStorage.setItem("category",category)
        window.location.href = "/searchItems"
    })
})
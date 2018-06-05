$(document).ready(function(){
    $("#searchButton").on("click", function(event){
        event.preventDefault();
        let category = $("icon_prefix2").val()
        sessionStorage.setItem("category",category)
    })
})
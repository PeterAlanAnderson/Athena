$(document).ready(function(){
    const userEmail = sessionStorage.getItem("userEmail")
    let name = ""
    let address = "This isn't something we gather at this time"
    let vendorName = ""
    let balance = 0

    $.get("/api/customer/"+userEmail, function(data){
        console.log(data.name)
        name = data.name;
        
        $("#userTitle").text(name)
        $("#userImage").attr("src","http://cdn.bgr.com/2015/04/strong-bad-email.png")
        $("#name").text(name)
        $("#username").text(data.username)
        $("#address").text(address)
        $("#email").text(userEmail)
        $("#revenue").append(data.balance)

        if (data.vendor){
            $("#vendorName").text(data.vendorName)
        } else {

        }


    })


})
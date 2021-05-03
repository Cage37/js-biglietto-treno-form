var create = document.getElementById("create");
create.addEventListener('click',
function () {
    var userName = document.getElementById("username").value;
    document.getElementById("user").innerHTML = userName;
    var km = document.getElementById("km").value;
    var age = document.getElementById("age").value;
    document.getElementById("wagon").innerHTML = 7;
    document.getElementById("discount").innerHTML = age;
    var ticketPrice = (km * 0.21);
    var discount = 0;
    if (age == "Minorenne") {
        discount=(ticketPrice * 20)/100;
    } else if (age == "Over 65") {
        discount=(ticketPrice * 40)/100;
    }
    var discountedPrice = ticketPrice - discount;
    var finalPrice = discountedPrice.toFixed(2);
    document.getElementById("result").innerHTML = finalPrice + " €";
    var code = Math.floor(Math.random() * 9999) + 90000;
    document.getElementById("code").innerHTML = code;
}
);

var cancel = document.getElementById("cancel");
cancel.addEventListener('click', 
function () {
    document.getElementById("user").innerHTML = "";
    document.getElementById("discount").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("code").innerHTML = "";
    document.getElementById("wagon").innerHTML = "";
}
);
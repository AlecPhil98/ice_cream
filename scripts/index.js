"use strict"

console.log(test)


window.onnload = function () {

    let iceCreamForm = document.querySelector("#iceCreamForm")

    iceCreamForm.addEventListener("submit", customizeIceCream)


}

function customizeIceCream(event) {

    //keeps the form from submitting itself and refreshing the page
    event.preventDefault();

    let iceCreamForm = event.target
    //Scoops variables 
    let iceCreamScoop = 2.25
    let additionalIceCream = 1.25
    //Total cost off scoops or addtional scoops * number of scoops
    let totalDue = iceCreamScoop + Number(iceCreamForm.numScoops.value);

    //handle the toppings cost 
    let toppings = 0;
    if(iceCreamForm)






}
"use strict"




window.onload = function () {

    let iceCreamForm = document.querySelector("#iceCreamForm")
    let coneChecked = document.querySelector("#coneChecked")
    let cupChecked = document.querySelector("#cupChecked")

    iceCreamForm.addEventListener("submit", customizeIceCream)
    coneChecked.addEventListener("click", hideShowToppings);
    cupChecked.addEventListener("click", hideShowToppings);


}

function customizeIceCream(event) {

    //keeps the form from submitting itself and refreshing the page
    event.preventDefault();

    let iceCreamForm = event.target
    //Scoops variables 
    let iceCreamScoop = 2.25;
    let numScoops = iceCreamForm.numScoops.value


    //handle the toppings cost 
    let toppings = 0;
    if (iceCreamForm.sprinkles.checked) {

        toppings += 0.50;
    }

    if (iceCreamForm.whippedCream.checked) {

        toppings += 0.25;
    }

    if (iceCreamForm.hotFudge.checked) {

        toppings += 1.25;
    }


    if (iceCreamForm.cherry.checked) {

        toppings += 0.25;
    }
    // Number of scoops 
    if (numScoops > 1) {
        iceCreamScoop += (numScoops - 1) * 1.25


    }

 
    //.7 %  tax of the output 
    let taxDue = iceCreamScoop * (7 / 100);

    let message = `
      <div> Ice Cream Scoop:$${iceCreamScoop.toFixed(2)}</div>
      <div> Cost of Topppings:$${toppings.toFixed(2)}</div>
      <div> Tax Due:$${taxDue.toFixed(2)}</div>
      <div> Total due:$${(iceCreamScoop + taxDue).toFixed(2)}</div>
      `

    //put the message on the screen
    document.querySelector("#results").innerHTML = message;

  
}
function hideShowToppings(event) {

    let toppings = document.querySelector("#toppings")

    if (event.target.value === "cup") {

        toppings.classList.remove("none")

    } else {
        toppings.classList.add("none")
    }

}

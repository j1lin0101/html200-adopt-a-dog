function dogInfo(name, breed, fee) {
    alert("Name: " + name + "\nBreed: " + breed + "\nFee: $" + fee);
}

let totalPrice = 0;

function totalCost(addedFees) {
    totalPrice = totalPrice + Number(addedFees);
    alert("Total Cost: " + totalPrice);
    $('.checkout-icon p').text("$" + totalCost);
}
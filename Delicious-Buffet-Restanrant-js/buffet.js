function billCalculation() {
    var customerName = document.getElementById('customerName').value;
    var contactNo = document.getElementById('contactNo').value;
    var bookingDate = document.getElementById('bookingDate').value;
    var session1 = document.getElementById('session1').checked;
    var session2 = document.getElementById('session2').checked;
    var session3 = document.getElementById('session3').checked;
    var vegAdult = parseInt(document.getElementById('vegAdult').value);
    var vegKids = parseInt(document.getElementById('vegKids').value);
    var nonVegAdult = parseInt(document.getElementById('nonVegAdult').value);
    var nonVegKids = parseInt(document.getElementById('nonVegKids').value);
    var occasion = document.getElementById('occasion').value;
    var parking = document.getElementById('parking').checked;
  
    // Calculating total cost
    var totalCost = (vegAdult * 300) + (vegKids * 150) + (nonVegAdult * 400) + (nonVegKids * 200);
    var gstAmount = (totalCost * 12) / 100;
    var netPrice = totalCost + gstAmount;
  
    // Applying discount if family members count is greater than or equal to 10
    if (vegAdult + vegKids + nonVegAdult + nonVegKids >= 10) {
      netPrice *= 0.9; // Applying 10% discount
    }
    document.getElementById('result').innerHTML = `Hi ${customerName} ,You have to pay Rs. ${netPrice.toFixed(2) } .Thanks for coming!!!`
    return false;
}
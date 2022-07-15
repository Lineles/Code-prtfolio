var receipt = [7.99, 8.67, 8.50, 9.83, 10.45, 6.95, 7.67, 2.35, 4.99, 4.67,
    3.86
  ];
  
  function getCents(price) {
    var splitPrice = price.toString().split(".");
    return splitPrice[1];
  }
  
  function getsDiscount() {
    var total = 0;
    for (var i = 0; i < receipt.length; i++) {
      total += receipt[i];
    }
    if (total > 50) {
      return true;
    } else {
      return false;
    }
  }
  
  function findDiscount(price) {
    var cents = getCents(price);
    if (cents == 67) {
      return 0.3;
    } else if (cents == 95) {
      return 0.4;
    } else if (cents == 99) {
      return 0.5;
    } else {
      return 0;
    }
  }
  
  function calculateTotal() {
    var total = 0;
    var totalSavings = 0;
    for (var i = 0; i < receipt.length; i++) {
      var originalPrice = receipt[i];
      if (getsDiscount() === true) {
        var discountRate = findDiscount(originalPrice);
        var savings = originalPrice * discountRate;
        totalSavings += savings;
        var discountedPrice = originalPrice - savings;
        total += discountedPrice;
        if (discountRate !== 0) {
          console.log("Item " + i + " Savings: $" + savings.toFixed(2));
        }
      } else {
        total += originalPrice;
      }
    }
    console.log("Total Saved: $" + totalSavings.toFixed(2));
    console.log("Total Post-Discount: $" + total.toFixed(2));
  }
  calculateTotal();
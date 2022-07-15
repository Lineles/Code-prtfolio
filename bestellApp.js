var italianFood = [{
    mealName: "Pasta Bolognese",
    quantity: 3,
    price: 7
  }, {
    mealName: "Pepperoni pizza",
    quantity: 2,
    price: 10
  }];
  var thaiFood = [{
    mealName: "Pad Thai",
    quantity: 1,
    price: 8
  }];
  var indianFood = [{
    mealName: "Chapati",
    quantity: 8,
    price: 7
  }, {
    mealName: "Chicken Massala",
    quantity: 5,
    price: 9
  }, {
    mealName: "Tandoori Chicken",
    quantity: 5,
    price: 9
  }];
  
  function findMeal(name, menu) {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].mealName === name) {
        return menu[i];
      }
    }
  }
  
  function selectMeal(name, type) {
    if (type === 'italian') {
      return findMeal(name, italianFood);
    } else if (type === 'indian') {
      return findMeal(name, indianFood);
    } else if (type === 'thai') {
      return findMeal(name, thaiFood);
    } else {
      return "not found";
    }
  }
  
  function createSummary(name, type, amount) {
    var order = selectMeal(name, type);
    var orderPossible = order !== 'not found' && amount <= order.quantity;
    var errorMessage = 'Something went wrong, please try again later';
 
    if (orderPossible) {
      var total = amount * order.price;
      return "You ordered " + amount + " " + name + " for a total of " + total +
        " euros";
    } else {
      return errorMessage;
    }
  }
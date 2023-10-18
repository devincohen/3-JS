function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza (crustArr, sauceArr, cheeseArr, toppingArr) {
    var pizza = {};
    pizza.crust = crustArr[Math.floor(Math.random() * crustArr.length)];
    pizza.sauce = sauceArr[Math.floor(Math.random() * sauceArr.length)];
    pizza.cheese = cheeseArr[Math.floor(Math.random() * cheeseArr.length)];
    pizza.toppings = toppingArr[Math.floor(Math.random() * toppingArr.length)];
    return pizza;
}

var pizza1 = pizzaOven("deep-dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("hand tossed", "marinara", "mozzarella", "sausage");
var pizza4 = pizzaOven("square-cut", "garlic parmesan", "feta", "peppers");

console.log(pizza2);



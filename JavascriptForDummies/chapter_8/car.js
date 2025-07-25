/* var students = {
    "1": "Aidan",
    "2": "Ethan",
    "3": "Tom",
    "4": "Courtney",
    "5": "lindo",
};

console.log(typeof students["3"]) */

var dreamCar = {
  make: "Chevvy",
  model: "Impala",
  color: "brown",
  year: 1967,
  bodyStyle: "Luxury Car",
  price: 5000,
};

alert("The type of dreamCar is: " + typeof dreamCar);

console.log(dreamCar.make);

document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("body").innerHTML =
  dreamCar.make + " " + dreamCar.model;

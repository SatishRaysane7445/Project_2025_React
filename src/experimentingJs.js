// // class Car {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   static hello() {
// //     return "Hello!!";
// //   }
// // }

// // const myCar = new Car("Ford");
// // console.log(Car.hello());

// // // But NOT on  a Car Object:
// // console.log(myCar.hello());

// // Create an Array
// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 }
// ];

// // Callback function to group by quantity
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

// // Group by "ok" and "low"
// const result = Object.groupBy(fruits, myCallback);

// // Log grouped results
// console.log("These fruits are Ok:");
// result.ok.forEach(fruit => {
//   console.log(`${fruit.name} - ${fruit.quantity}`);
// });

// console.log("\nThese fruits are Low:");
// result.low.forEach(fruit => {
//   console.log(`${fruit.name} - ${fruit.quantity}`);
// });
const Menu = [
  { name: "Paneer Butter Masala", isVegetarian: true },
  { name: "Chicken Biryani", isVegetarian: false },
  { name: "Veg Hakka Noodles", isVegetarian: true },
  { name: "Butter Chicken", isVegetarian: false },
  { name: "Mixed Vegetable Curry", isVegetarian: true },
  { name: "Fish Curry", isVegetarian: false },
  { name: "Chole Bhature", isVegetarian: true },
  { name: "Mutton Rogan Josh", isVegetarian: false }
];
const vegetarianItems_true = Menu.filter(item => item.isVegetarian === true);

console.log(vegetarianItems_true);
const vegetarianItems_false = Menu.filter(item => item.isVegetarian === false).map(item=>item.name);
console.log(vegetarianItems_false);

const Veg_nonveg=(Menu)=>({
vegetarianItems_true:Menu.filter(item => item.isVegetarian === true),
vegetarianItems_false:Menu.filter(item => item.isVegetarian === false).map(item=>item.name)
});
const result=Veg_nonveg(Menu);

console.log(result);

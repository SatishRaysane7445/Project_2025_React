// const username=Symbol("username");
// let password=Symbol("Password");
// let age=Symbol("age");

// const user={
//     username:"Satish",
//     password:"9850",
//     age:29
// }
// console.log(user.username,user.password,user.age);

const _engineId = Symbol("engineId"); // hidden, unique key
const model=Symbol("model");

const car = {
  brand: "Toyota",
  [model]: "Camry",
  [_engineId]: "ENG-2384023X"
};

// Public access:
console.log(car.brand);  // ✅ Toyota
console.log(car[model]);  // ✅ Camry

// Hidden access:
console.log(car[_engineId]); // ✅ ENG-2384023X

// Try looping over keys:
for (let key in car) {
  console.log(key); // ❌ _engineId will NOT show
}

console.log(Object.keys(car));             // ❌ Does NOT include Symbol
console.log(Object.getOwnPropertyNames(car)); // ❌ Still no Symbol

// To find it:
console.log(Object.getOwnPropertySymbols(car)); // ✅ [ Symbol(engineId) ]
const symbolica=Object.getOwnPropertySymbols(car);
console.log(car[symbolica[0]]);
console.log(car[symbolica[1]]);
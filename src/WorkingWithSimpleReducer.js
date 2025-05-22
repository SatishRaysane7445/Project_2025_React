const numbers = [10, 20, 30, 40];

const result = numbers.reduce(
  function (total, currentValue, currentIndex, arr) {
    console.log("Index:", currentIndex);
    console.log("Current Value:", currentValue);
    console.log("Total so far:", total);
    console.log("Array:", arr);
    console.log("----------");

    return total + currentValue;
  },
  0 // initialValue
);

console.log("Final Result:", result);

let apple = "apple";
let uppercaseApple = "APPLE";
let Ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];

console.log("Is apple is not equal to apple");
console.log(apple == "apple");

console.log("Is apple is not equal to apple");
console.log(apple != "apple");

console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log("\nIs ten is equal to twenty");
console.log(ten == twenty);

console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty)
    
console.log("\nIs ten is greater than zero");
console.log(ten > 0);

console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);



console.log("/nIs orange is include in our Fruits array");
console.log(fruits.includes("orange"));

console.log("/nisIs orange  not include in my Fruits array");
console.log(fruits.includes("orange"));
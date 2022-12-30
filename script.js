//Function calling other Function
const calculateAge = function (birthYear) {
  return 2022 - birthYear;
};

const aAge = calculateAge(1987);
console.log(aAge);

const jobLeft = function (birthYear) {
  const age = calculateAge(birthYear);
  return 65 - age;
};

const aJobLeft = jobLeft(1987);
console.log(aJobLeft);

// // html events
// onclick,onchange,onmouseover,onmouseout,onkeydown,onload

// // JavaScript Events

// function displayText() {
//   console.log("This is Console Text!");
// }
// function alertText() {
//   alert("This is Alert Text!");
// }

// // JavaScript Strings

// const firstName = "Debangshu";
// const lastName = "Pramanik";
// console.log(firstName);
// console.log(lastName);

// //Example 1

// const text = 'I Love "Bangladesh!"';
// console.log(text);

// //Example 2
// const text2 = "I Love 'Bangladesh!'";
// console.log(text2);

// //Example 3
// const text3 = 'I Love \\"Bangladesh!"';
// console.log(text3);

// String Methods

// const x = "Binata Rani";
// console.log(x.length);

// // String slice // Left to right
// const fruits = "Apple, Banana, Grape, mango";
// console.log(fruits);

// const fruit1 = fruits.slice(0, 5);
// console.log(fruit1);

// const fruit2 = fruits.slice(7, 13);
// console.log(fruit2);

// const fruit3 = fruits.slice(15, 20);
// console.log(fruit3);

// const fruit4 = fruits.slice(22, 27);
// console.log(fruit4);

// console.log(fruit1, fruit2, fruit3, fruit4);

// // Negative slice

// const fruits = "Apple, Banana, Grape, mango";
// const fruit1 = fruits.slice(-5);
// console.log(fruit1);

// const fruit2 = fruits.slice(-13, -7);
// console.log(fruit2);

// // Substring

// const fruits = "Apple, Banana, Grape, mango";
// const fruit1 = fruits.substring(0, 5);
// console.log(fruit1);

// Substr

// // String replace
// const text = "I Love Naogaon!";
// console.log(text);

// const text2 = text.replace("Naogaon", "Rajshahi");
// console.log(text2);

// // String toUpperCase

// const text = "Hello World!";
// console.log(text);
// console.log(text.toUpperCase());

// // String toLowerCase

// const text = "Hello World!";
// console.log(text);
// console.log(text.toLowerCase());

// // String trim

// const text = "    Hello World!  ";
// console.log(text);
// console.log(text.trim());

// // String search

// const text = "Rahim Karim Sakib Karim";

// console.log(text.indexOf("Sakib"));

// console.log(text.lastIndexOf("Karim"));

// console.log(text.search("Karim"));

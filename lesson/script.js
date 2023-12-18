"use strict"



// let myObj = {
// mous: "hp",
// keyboard: "doom",
// mon: "msi",
// comp: {
//   video: "rad",
//   proc: "atl"
// },

// makeTest: function() {
//   console.log("Test");
// }

// };
// myObj.makeTest();
// console.log(Object.keys(myObj).length);
// console.log(myObj["comp"]);

// const {video, proc} = myObj.comp;
// console.log(myObj.comp);

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
// console.log(arr.length);

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);


// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }


// const str = prompt("", "");
// const products = str.split(", ");

// products.sort();
// console.log(products.join("; "));
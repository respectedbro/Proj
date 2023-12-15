"use strict"



let myObj = {
mous: "hp",
keyboard: "doom",
mon: "msi",
comp: {
  video: "rad",
  proc: "atl"
},

makeTest: function() {
  console.log("Test");
}

};
myObj.makeTest();
// console.log(Object.keys(myObj).length);
// console.log(myObj["comp"]);

const {video, proc} = myObj.comp;
console.log(myObj.comp);
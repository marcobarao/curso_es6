"use strict";

var arr = [1, 2, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // const test = () => {
//   return { nome: "Marco" };
// };

var test = function test() {
  return {
    nome: "Marco"
  };
};

console.log(test());

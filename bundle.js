"use strict";

var arr = [1, 3, 4, 6, 7, 9, 11, 15, 16];
var map = arr.map(function (item) {
  return item * 2;
});
console.log(map);
var reduce = arr.reduce(function (total, item) {
  return total += item;
});
console.log(reduce);
var filter = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);

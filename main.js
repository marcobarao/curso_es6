const arr = [1, 3, 4, 6, 7, 9, 11, 15, 16];

const map = arr.map(function(item) {
  return item * 2;
});

console.log(map);

const reduce = arr.reduce(function(total, item) {
  return (total += item);
});

console.log(reduce);

const filter = arr.filter(function(item) {
  return item % 2 == 0;
});

console.log(filter);

const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);

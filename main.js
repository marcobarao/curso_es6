const arr = [1, 2, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

// const test = () => {
//   return { nome: "Marco" };
// };

const test = () => ({ nome: "Marco" });

console.log(test());

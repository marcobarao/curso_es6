// REST

const usuario = {
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

const sum = (...params) => {
  return params.reduce((total, item) => {
    return (total += item);
  });
};
console.log(sum);

// SPREAD

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
  nome: "Marco",
  idade: 18,
  empresa: "Nenhuma"
};

const usuario2 = { ...usuario1, nome: "Gabriel" };
console.log(usuario2);

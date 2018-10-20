// const texto = "Olá";
// texto = "Não dá para reatribuir em const";

const teste = { texto: "Olá" };
teste.texto = "Porém uma const é mutável";

console.log(teste.texto);

function test(x) {
  let y = 2;

  if (y == 2) {
    console.log(x, y);
  }
}

// console.log(y); // Não dá pois nossa váriavel está atribuida em outro escopo
test(10);

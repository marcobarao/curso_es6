"use strict";

// const texto = "Olá";
// texto = "Não dá para reatribuir em const";
var teste = {
  texto: "Olá"
};
teste.texto = "Porém uma const é mutável";
console.log(teste.texto);

function test(x) {
  var y = 2;

  if (y == 2) {
    console.log(x, y);
  }
} // console.log(y); // Não dá pois nossa váriavel está atribuida em outro escopo


test(10);

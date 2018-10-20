"use strict";

var usuario = {
  nome: "Marco",
  idade: 18,
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

function perfilUsuario(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      estado = _ref.endereco.estado;
  console.log("O usu\xE1rio ".concat(nome, " tem ").concat(idade, " e mora em ").concat(estado));
}

perfilUsuario(usuario);

const usuario = {
  nome: "Marco",
  idade: 18,
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

function perfilUsuario({ nome, idade, endereco: { estado } }) {
  console.log(`O usuário ${nome} tem ${idade} e mora em ${estado}`);
}

perfilUsuario(usuario);

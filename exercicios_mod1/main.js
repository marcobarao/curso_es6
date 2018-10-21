// Exercícios 1

class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin || false;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(User1.email);
console.log(User1.senha);
console.log(User1.isAdmin()); // false
console.log(Adm1.email);
console.log(Adm1.senha);
console.log(Adm1.isAdmin()); // true

// Exercícios 2

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = usuarios.map(({ idade }) => idade);
console.log(idades);

const filter = usuarios.filter(
  ({ idade, empresa }) => idade >= 18 && empresa === "Rocketseat"
);
console.log(filter);

const find = usuarios.find(({ empresa }) => empresa === "Google");
console.log(find);

const duasOperacoes = usuarios
  .map(({ idade, ...resto }) => ({
    ...resto,
    idade: idade * 2
  }))
  .filter(({ idade }) => idade <= 50);
console.log(duasOperacoes);

// Exercícios 3

const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log(arr);

const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise);

// Exercícios 4

const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

const mostraInfo = ({ nome, idade }) => `${nome} tem ${idade} anos.`;
console.log(mostraInfo({ nome: "Diego", idade: 23 }));

// Exercícios 5

const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr1;
console.log(x);
console.log(y);

const soma = (...params) => params.reduce((total, item) => (total += item));
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario1 = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = {
  ...usuario2,
  nome: "Gabriel"
};

const usuario3 = {
  ...usuario2,
  endereco: {
    ...usuario2.endereco,
    cidade: "Lontras"
  }
};

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);

// Exercícios 6

const usuario = "Marco";
const idade = 18;

console.log(`O usuário ${usuario5} possui ${idade2} anos`);

// Exercícios 7

const nome = "Marco";
const idade = 18;

const usuario = {
  nome,
  idade,
  cidade: "São Paulo"
};

console.log(usuario);

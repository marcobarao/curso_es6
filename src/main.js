import {
  umPorSegundo,
  getUserFromGithub,
  Github,
  buscaUsuario
} from "./async-await";

umPorSegundo();

getUserFromGithub("marcobarao");
getUserFromGithub("marcoaaaabarao");

Github.getRepositories("marcobarao/marcobarao.github.io");
Github.getRepositories("marcobarao/dasuhdsauhdsaudhuasu");

buscaUsuario("marcobarao");
buscaUsuario("marcoaaaabarao");

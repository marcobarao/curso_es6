class List {
  constructor() {
    this.list = [];
  }

  add(elem) {
    this.list.push(elem);
    return this;
  }

  get() {
    return this.list;
  }
}

class TodoList extends List {
  constructor() {
    super();
  }
  static oQueEuSou() {
    return "Eu sou uma lista de afazeres";
  }
}

console.log(new TodoList().add("algumacoisa").get());
console.log(TodoList.oQueEuSou());

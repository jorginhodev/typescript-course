// Interfaces

// definição
interface GameI {
  title: string;
}

interface DLCI {
  extra: string;
}

// intersection / extend
interface GameCollectionI extends GameI, DLCI {}

// implements
class CreateGameI implements GameCollectionI {
  title: string;
  extra: string;

  constructor(t: string, e: string) {
    this.title = t;
    this.extra = e;
  }
}

// declarar função
interface getSimilarsI {
  (title: string): void;
}

// ========== Diferenças ========== //
// interface ID extends number {} - não rola

// Não consigo definir Tuplas na interface
interface Tuple {
  0: number;
  1: number;
}

[1, 2, 3, 4, "sajshajhsja"] as Tuple;

// Pode ter múltiplas declarações e ele une de mesmo nome

interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "foo",
  b: "bar",
};

// vantagem: quando tiver criando libs, prefira Interfaces, porque são mais extensíveis

// criando objetos/classes (POO)

// O mais importante é: CONSISTÊNCIA

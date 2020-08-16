interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "The best game in the World",
  genre: "Action",
  // platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou);
console.log(tlou.title);
// tlou.genre = "other";
console.log(tlou.genre);

if (tlou.getSimilars) {
  tlou.getSimilars("The Last of Us");
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: "The Last of Us - Leftbehind",
  description: "You play as Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"],
};

console.log(leftBehind);

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}

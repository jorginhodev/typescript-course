abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log("---GET---");
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} has the char ${this.nickname} at level ${this.level}.`
    );
  }
}

// const jorge = new UserAccount("Jorge", 36);
// console.log(jorge);
// console.log(jorge.age);
// jorge.logDetails();

const john = new CharAccount("John", 21, "johndoe", 80);
console.log(john);
// john.nickname = "jorge84";
// console.log(john.nickname);
// john.level = 90;
console.log(john.level);
john.logDetails();
john.logCharDetails();

console.log(john.getLevel);

john.setLevel = 90;
console.log(john.getLevel);

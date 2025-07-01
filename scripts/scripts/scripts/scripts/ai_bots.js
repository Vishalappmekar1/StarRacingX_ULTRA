class AIBot {
  constructor(name, difficulty) {
    this.name = name;
    this.speed = difficulty === "hard" ? 40 : 30;
  }

  update() {
    console.log(`${this.name} is driving at speed ${this.speed}`);
  }
}

const bots = [
  new AIBot("BotOne", "easy"),
  new AIBot("DriftLord", "hard")
];

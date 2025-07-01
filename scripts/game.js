let game = {
  time: 0,
  driftPoints: 0,
  collisions: 0,
  coins: 0,
  stars: 0,
  unlockedSkins: []
};

setInterval(() => {
  game.time++;
}, 1000);

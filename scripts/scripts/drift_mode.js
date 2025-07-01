function registerDrift(speed, angle) {
  if (speed > 30 && Math.abs(angle) > 20) {
    game.driftPoints += Math.round(speed * (angle / 45));
    document.getElementById('stars').textContent = `⭐ ${game.driftPoints}`;
  }
}

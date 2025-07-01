function collectCoin() {
  game.coins++;
  document.getElementById('coins').textContent = `💰 ${game.coins}`;
}

function spendCoins(amount) {
  if (game.coins >= amount) {
    game.coins -= amount;
    return true;
  }
  return false;
}

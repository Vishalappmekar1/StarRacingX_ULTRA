const challenges = [
  { name: "Drift King", goal: 300, type: "driftPoints", reward: "⭐ +2", completed: false },
  { name: "Clean Finish", goal: 0, type: "collisions", reward: "Skin: Neon", completed: false }
];

function checkChallenges() {
  challenges.forEach(c => {
    if (!c.completed && game[c.type] >= c.goal) {
      c.completed = true;
      alert(`🎯 ${c.name} Complete! Reward: ${c.reward}`);
      if (c.reward.includes("⭐")) game.stars += 2;
      if (c.reward.includes("Skin")) game.unlockedSkins.push("Neon");
    }
  });
}

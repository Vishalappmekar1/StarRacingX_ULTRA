const missions = [
  { text: "Win 2 races", completed: false },
  { text: "Collect 5 coins", completed: false }
];

function showMissions() {
  const status = missions.map(m => m.text + (m.completed ? " ✅" : " ❌")).join("<br>");
  document.getElementById("challengeStatus").innerHTML = status;
}


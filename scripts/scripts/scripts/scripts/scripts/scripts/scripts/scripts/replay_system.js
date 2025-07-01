let recorder, chunks = [];

function startRecording(canvas) {
  const stream = canvas.captureStream();
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = saveRecording;
  recorder.start();
}

function stopRecording() {
  recorder.stop();
}

function saveRecording() {
  const blob = new Blob(chunks, { type: "video/webm" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "race-replay.webm";
  a.click();
}

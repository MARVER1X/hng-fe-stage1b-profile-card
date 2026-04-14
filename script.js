const timeElement = document.getElementById("time");

function updateTime() {
  const now = Date.now();
  timeElement.textContent = now;
  timeElement.setAttribute("datetime", now);
}

// Initial render
updateTime();

setInterval(updateTime, 1000);
const timeElement = document.getElementById("time");

function updateTime() {
  timeElement.textContent = Date.now();
}

// Initial render
updateTime();

// Update every second
setInterval(updateTime, 1000);
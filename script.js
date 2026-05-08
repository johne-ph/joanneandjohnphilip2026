// Countdown Timer targeting June 7, 2026
const countdownDate = new Date("Jun 7, 2026 15:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return true; // Stop if not on page

    if (distance < 0) {
        countdownEl.innerHTML = "<h2>It's Time!</h2>";
        return true; // Stop interval
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    if(daysEl) {
        daysEl.innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
    return false;
}

// Run immediately to avoid 1-second delay
console.log("Starting countdown timer targeting:", new Date(countdownDate));
const shouldStop = updateTimer();
if (!shouldStop) {
    const timerInterval = setInterval(() => {
        if (updateTimer()) clearInterval(timerInterval);
    }, 1000);
}

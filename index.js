function marathonCountDown() {
    const marathonDate = new Date("November 2, 2025 09:00");
    const userDate = new Date();
    const diff = marathonDate - userDate;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDays = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDays;

    const displayHours = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        headerChange();
    }
}

let timerID = setInterval(marathonCountDown, 1000);

function headerChange() {
    const heading = document.querySelector("h1");
    heading.textContent = `Let's run!`;
    heading.classList.add("newHeading");
}

const btn = document.querySelector(".btn");
const audio = document.querySelector(".myAudio");
const icon = document.querySelector("#icon");

btn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icon.src = "pause.png";
    } else {
        audio.pause();
        icon.src = "play.png";
    }
})
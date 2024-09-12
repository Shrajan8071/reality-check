function updateDateTime() {
    const now = new Date();
    const currentDateTime = document.getElementById('currentDateTime');
    currentDateTime.innerText = now.toLocaleString();

    // Calculate days left in the year
    const endOfYear = new Date(now.getFullYear(), 11, 31);
    const daysLeftElement = document.getElementById('daysLeft');
    const daysLeft = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24));
    daysLeftElement.innerText = daysLeft;

    // Calculate hours, minutes, seconds left until the end of the year
    const timerElement = document.getElementById('timer');
    const timeDiff = endOfYear - now;

    const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timerElement.innerText = `${hoursLeft} Hours, ${minutesLeft} Minutes, ${secondsLeft} Seconds`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();

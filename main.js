const offerEndDate = new Date('2023-12-30T00:00:00Z').getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time (in UTC)
    const currentDate = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const remainingTime = offerEndDate - currentDate;

    if (remainingTime <= 0) {
        // If the offer has ended, display a message and clear the interval
        document.getElementById('countdown').innerHTML = 'The offer has ended!';
        clearInterval(countdownInterval);
    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
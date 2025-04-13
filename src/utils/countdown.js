export function example5() {
    const countdownDisplay = document.getElementById('countdown-display');
    let timeLeft = 10; // Countdown starts from 10 seconds
  
    countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
  
    const timer = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        clearInterval(timer);
        countdownDisplay.textContent = 'Countdown finished!';
      } else {
        countdownDisplay.textContent = `Time left: ${timeLeft} seconds`;
      }
    }, 1000); // Update every second
  }
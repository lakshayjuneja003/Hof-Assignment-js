let delay = 3000; // delay in milliseconds
let timeLeft = delay / 1000; // time left in seconds

// Display countdown message every second
let intervalId = setInterval(function() {
  console.log(`Generating random number in ${timeLeft} seconds...`);
  timeLeft--;

  if (timeLeft === 0) {
    clearInterval(intervalId); // Stop the interval when countdown is finished
    let randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000);

// Delay generating the random number
// setTimeout(function() {
//   clearInterval(intervalId); // Stop the interval if it hasn't already been stopped
//   let randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
//   console.log(`Random number generated: ${randomNumber}`);
// }, delay);

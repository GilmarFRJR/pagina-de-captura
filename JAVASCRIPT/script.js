// timer começo------------------------------------------------------------------------------------------------------------------

let timeLeft = 6 * 24 * 60 * 60; 

const daysElement = $("#dias");
const hoursElement = $("#horas");
const minutesElement = $("#minutos");
const secondsElement = $("#segundos");


function updateTimer() {

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);

  
  daysElement.text(days);
  hoursElement.text(hours.toString().padStart(2, "0"));
  minutesElement.text(minutes.toString().padStart(2, "0"));
  secondsElement.text(seconds.toString().padStart(2, "0"));


  if (timeLeft === 0) {
    clearInterval(timer);
  }

 
  timeLeft--;
}


const timer = setInterval(updateTimer, 1000);

// timer fim------------------------------------------------------------------------------------------------------------------
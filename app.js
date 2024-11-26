function formatTime(time) {
  return time.padStart(2, "0");
}

const getTime = () => {
  const date = new Date();

  const hours = formatTime(date.getHours().toString());
  const minutes = formatTime(date.getMinutes().toString());
  const seconds = formatTime(date.getSeconds().toString());

  return [hours, minutes, seconds];
};

const setClock = ([hours, minutes, seconds], clockClass) => {
  const $numbersFields = document.querySelectorAll(clockClass);

  if ($numbersFields.length !== 6) {
    const errorMessage = `Expected 6 elements with class '${clockClass}', but found ${$numbersFields.length}`;
    console.error(errorMessage);
    alert(
      "Estamos encontrando um problema de funcionamento, volte mais tarde!"
    );
    return errorMessage;
  }

  $numbersFields[0].innerHTML = hours[0];
  $numbersFields[1].innerHTML = hours[1];
  $numbersFields[2].innerHTML = minutes[0];
  $numbersFields[3].innerHTML = minutes[1];
  $numbersFields[4].innerHTML = seconds[0];
  $numbersFields[5].innerHTML = seconds[1];
};

const setCurrentNumbers = (time) => setClock(time, ".current_number");

const setPreviousNumbers = (time) => setClock(time, ".previous_number");

const updateClock = (previous_time) => {
  const time = getTime();

  setCurrentNumbers(time);
  setPreviousNumbers(previous_time);

  return time;
};

const animateTheCard = ($card) => {
  $card.classList.remove("flip");
  $card.offsetWidth; // forces the browser to calculate the size, consequently gaining time between one action and another
  $card.classList.add("flip");
};

const compareTimes = (firstTime, secondTime) => {
  let differents = [];
  for (let i = 0; i < firstTime.length; i++) {
    for (let j = 0; j < firstTime[i].length; j++) {
      if (firstTime[i][j] !== secondTime[i][j]) differents.push([i, j]);
    }
  }

  return differents;
};

const addAnimation = (timeInMemory) => {
  const $cards = document.querySelectorAll(".card");

  const differents = compareTimes(time, timeInMemory);
  differents.forEach(([i, j]) => animateTheCard($cards[i * 2 + j]));
};

let time = ["00", "00", "00"];
const app = () => {
  const timeInMemory = time;

  time = updateClock(time);

  addAnimation(timeInMemory);

  setTimeout(app, 1000);
};

app();

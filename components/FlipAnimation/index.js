import HandlerTime from "../HandlerTime/index.js";

class FlipAnimation {
  static animateTheCard($card) {
    $card.classList.remove("flip");
    $card.offsetWidth; // forces the browser to calculate the size, consequently gaining time between one action and another
    $card.classList.add("flip");
  }

  static addAllAnimation = (time, timeInMemory) => {
    const $cards = document.querySelectorAll(".card");

    const differents = HandlerTime.compareTimes(time, timeInMemory);
    differents.forEach(([i, j]) => this.animateTheCard($cards[i * 2 + j]));
  };
}

export default FlipAnimation;

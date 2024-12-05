import addStyle from "../utils/addStyle.js";

const ClockStyle = () => `
  <style>
    :root {
      --card-width: calc(100vw/10);
      --card-height: calc(100vw/6.7);
      --space-between-cards: calc(100vw/30);
      --font-size-clock: calc(100vw/9.375);
      --divider-height: calc(100vw/300);
    }

    .clock_container {
      height: 100vh;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .clock {
      font-size: var(--font-size-clock);

      display: flex;
      justify-content: center;
      gap: var(--space-between-cards);
      width: calc((var(--card-width) * 8) + var(--space-between-cards) * 8);
      overflow: hidden;
    }

    .unit {
      display: grid;
      grid-template-columns: repeat(2, var(--card-width));
      gap: var(--space-between-cards);
      width: calc((var(--card-width) * 2) + var(--space-between-cards));
      height: var(--card-height);
      overflow: hidden;
    }

    .card {
      width: var(--card-width);
      height: var(--card-height);
      background-color: rgba(34, 34, 34, 0.6);

      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      transform-style: preserve-3d;
      perspective: 1000px;
      transition: transform 0.6s ease-in-out;
      position: relative;
    }

    .card .current_number,
    .card .previous_number {
      position: absolute;

      width: 100%;
      height: 100%;

      backface-visibility: hidden;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card .previous_number {
      transform: rotateX(180deg);
    }

    .card::before {
      content: "";
      z-index: 1;

      width: 100%;
      height: var(--divider-height);
      background-color: var(--background);

      position: absolute;

      left: 0;
      top: 50%;
    }

    @keyframes flipdown {
      0% {
        transform: rotateX(-180deg);
      }

      100% {
        transform: rotateX(0deg);
      }

    }

    .flip {
      animation: flipdown 0.5s forwards;
    }
  </style>
`;

const CardView = () => `
  <div class="card">
    <div class="current_number">
      0
    </div>
    <div class="previous_number">
      0
    </div>
  </div>
`;

const UnitView = () => `
  <div class="unit">
    ${CardView()}
    ${CardView()}
  </div>
`;

const SeparatorView = () => `<div class="separator">:</div>`;

const FlipAudio = () =>
  `<audio src="./assets/audio/flip.mp3" class="flip_audio"></audio>`;

const BreakAudio = () =>
  `<audio src="./assets/audio/break.mp3" class="break_audio"></audio>`;

const ClockView = () => `
  <div class="clock">
    ${FlipAudio()}
    ${BreakAudio()}

    ${UnitView()}
    ${SeparatorView()}
    ${UnitView()}
    ${SeparatorView()}
    ${UnitView()}
  </div>
`;

const $container = document.querySelector(".clock_container");

addStyle(ClockStyle);
$container.innerHTML = ClockView();

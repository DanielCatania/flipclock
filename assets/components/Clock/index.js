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
  `<audio src="/assets/audio/flip.mp3" class="flip_audio"></audio>`;

const BreakAudio = () =>
  `<audio src="/assets/audio/break.mp3" class="break_audio"></audio>`;

const ClockView = () => `
  <link rel="stylesheet" href="/assets/components/Clock/style.css">

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

$container.innerHTML = ClockView();

import addsMouseVisibility from "../../scripts/utils/addsMouseVisibility.js";
import Tooltip from "../Tooltip/index.js";

const HeaderView = () => `
  <link rel="stylesheet" href="/assets/components/Header/style.css">
  <header class="invisible">
    <nav>
      <a href="/">Relógio</a> 
      <a href="/timer">Timer</a> 
      <a href="/pomodoro">Pomodoro</a>
    </nav>
    <div class="sound_status tooltip__container">
      🔊
      ${Tooltip("Desabilitar som de flip")}
    </div>
  </header>
`;

const $body = document.querySelector("body");

$body.innerHTML = HeaderView() + $body.innerHTML;

const $header = document.querySelector("header");

addsMouseVisibility($header);

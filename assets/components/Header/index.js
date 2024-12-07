import addsMouseVisibility from "../../scripts/utils/addsMouseVisibility.js";

const HeaderView = () => `
  <link rel="stylesheet" href="/assets/components/Header/style.css">
  <header class="invisible">
    <nav>
      <a href="/">Relógio</a> 
      <a href="/timer">Timer</a> 
      <a href="/pomodoro">Pomodoro</a>
    </nav>
  </header>
`;

const $body = document.querySelector("body");

$body.innerHTML = HeaderView() + $body.innerHTML;

const $header = document.querySelector("header");

addsMouseVisibility($header);

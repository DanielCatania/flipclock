import addStyle from "../utils/addStyle.js";
import addsMouseVisibility from "../utils/addsMouseVisibility.js";

const HeaderStyle = () => `
  <style>
    header {
      padding: 10px;

      display: flex;
      justify-content: center;
      
      width: 100%
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }

    header nav {
      display: flex;
      width: 100%;
      max-width: 300px;
      justify-content: space-between;
    }

    header a {
      background: none;
      border: none;
      color: #ccc;
      font-weight: bold;

      position: relative;
      cursor: pointer;
    }

    header a::after, header a::before{
      content: "";
      position: absolute;

      height: 15px;
      width: 1px;
      background-color: #ccc;
      bottom: 0;
      right: -8px;

    }

    header a::before {
      left: -8px;
    }

    header a:hover {
      font-size: 18px;
      transition: 0.5s;
      color: #b56d5b;
    }
  </style>
`;

const HeaderView = () => `
  <header class="invisible">
    <nav>
      <a href="./">Relógio</a> 
      <a href="./timer.html">Timer</a> 
      <a href="./pomodoro.html">Pomodoro</a>
    </nav>
  </header>
`;

const $body = document.querySelector("body");

addStyle(HeaderStyle);
$body.innerHTML = HeaderView() + $body.innerHTML;

const $header = document.querySelector("header");

addsMouseVisibility($header);

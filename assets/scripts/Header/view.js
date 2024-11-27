import addStyle from "../utils/addStyle.js";

const HeaderStyle = () => `
  <style>
    header {
      padding: 10px;

      display: flex;
      justify-content: center;
    }

    header nav {
      display: flex;
      width: 100%;
      max-width: 300px;
      justify-content: space-between;
    }

    header button {
      background: none;
      border: none;
      color: #ccc;
      font-weight: bold;

      position: relative;
      cursor: pointer;
    }

    header button::after, header button::before{
      content: "";
      position: absolute;

      height: 15px;
      width: 1px;
      background-color: #ccc;
      bottom: 0;
      right: -8px;

    }

    header button::before {
      left: -8px;
    }

    header button:hover {
      font-size: 1.1em;
      transition: 1s;
      color: red;
    }
  </style>
`;

const Header = () => `
  <header>
    <nav>
      <button>Relógio</button> 
      <button>Timer</button> 
      <button>Pomodoro</button>
    </nav>
  </header>
`;

const $body = document.querySelector("body");

addStyle(HeaderStyle);
$body.innerHTML = Header() + $body.innerHTML;

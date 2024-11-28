import addStyle from "../utils/addStyle.js";
import { closePopUp, openPopUp } from "./index.js";

const PopUpStyle = () => `
  <style>
    .popup_overlay {
      width: 100vw;
      height: 100vh;

      top: 0;
      left: 0;
      position: fixed;
      z-index: 1000;

      background-color: rgba(240, 240, 240, 0.7);
      display: none;

      justify-content: center;
      align-items: center;
    }

    .popup_view {
      display: flex;
    }

    .popup_close {
      font-size: 18px;
      color: #000;
      position: absolute;

      left: 86vw;
      top: 5vh;

      font-size: 2em;
      width: auto;
      min-width: auto;

      background-color: transparent;
    }

    .popup {
      width: 70vw;
      height: 100vh;
      min-width: 200px;

      background-color: rgb(34, 34, 34);
      padding: 1%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
`;

const PopUpView = (content) => `
  <div class="popup_overlay">
    <button class="popup_close">X</button>
    <div class="popup">
      ${content}  
    </div>
  </div>
`;

const $container = document.querySelector(".popup_container");

const content = $container.innerHTML;

addStyle(PopUpStyle);
$container.innerHTML = PopUpView(content);

const $closeButton = document.querySelector(".popup_close");

$closeButton.addEventListener("click", closePopUp);

const $openPopUpButton = document.querySelector(".open_popup");
$openPopUpButton.addEventListener("click", openPopUp);

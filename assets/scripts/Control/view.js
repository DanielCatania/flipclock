import addsMouseVisibility from "../utils/addsMouseVisibility.js";
import Control from "./index.js";
import { controlStaus } from "../../../app.js";

const $controls = document.querySelector(".controls");
const $control = document.querySelector(".control");

if ($control)
  $control.addEventListener("click", () => {
    const content = Control.changeIsPaused(controlStaus);

    $control.innerHTML = content;
  });

addsMouseVisibility($controls);

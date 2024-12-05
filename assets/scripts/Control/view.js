import addsMouseVisibility from "../utils/addsMouseVisibility.js";
import Control from "./index.js";
import { controlStatus } from "../../../app.js";

const $controls = document.querySelector(".controls");
const $control = document.querySelector(".control");

if ($control)
  $control.addEventListener("click", () => {
    Control.changeIsPaused(controlStatus);
  });

addsMouseVisibility($controls);

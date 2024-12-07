import addsMouseVisibility from "../../scripts/utils/addsMouseVisibility.js";
import Control from "../../scripts/Control/index.js";
import { controlStatus } from "../../../app.js";

const $controls = document.querySelector(".controls");
const $control = document.querySelector(".control");

if ($control)
  $control.addEventListener("click", () => {
    Control.changeIsPaused(controlStatus);
  });

addsMouseVisibility($controls);

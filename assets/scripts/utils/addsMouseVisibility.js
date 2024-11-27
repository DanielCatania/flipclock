export default function addsMouseVisibility($element) {
  let time;
  const changeFunction = () => {
    $element.classList.add("visible");

    if (time) clearTimeout(time);
    time = setTimeout(() => $element.classList.remove("visible"), 3000);
  };
  document.addEventListener("mousemove", changeFunction);
  document.addEventListener("touchstart", changeFunction);
}

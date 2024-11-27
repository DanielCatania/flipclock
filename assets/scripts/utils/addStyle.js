export default function addStyle(style) {
  const $head = document.querySelector("head");

  $head.innerHTML = $head.innerHTML + style();
}

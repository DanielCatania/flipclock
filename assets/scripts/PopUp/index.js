export function closePopUp() {
  const $popUp = document.querySelector(".popup_overlay");

  $popUp.classList.remove("popup_view");
}

export function openPopUp() {
  const $popUp = document.querySelector(".popup_overlay");

  $popUp.classList.add("popup_view");
}

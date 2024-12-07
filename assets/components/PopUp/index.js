export function closePopUp() {
  const $popUp = document.querySelector(".popup_overlay");

  $popUp.classList.remove("popup_view");
}

export function openPopUp() {
  const $popUp = document.querySelector(".popup_overlay");

  $popUp.classList.add("popup_view");
}

const PopUpView = (content) => `
  <link rel="stylesheet" href="/assets/components/PopUp/style.css">

  <div class="popup_overlay">
    <button class="popup_close">X</button>
    <div class="popup">
      ${content}  
    </div>
  </div>
`;

const $container = document.querySelector(".popup_container");

const content = $container.innerHTML;

$container.innerHTML = PopUpView(content);

const $closeButton = document.querySelector(".popup_close");

$closeButton.addEventListener("click", closePopUp);

const $openPopUpButton = document.querySelector(".open_popup");
$openPopUpButton.addEventListener("click", openPopUp);

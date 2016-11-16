var buyLinks = document.querySelectorAll(".buy");
var cardModal = document.querySelector(".modal-card-add");
var cardModalClose = cardModal.querySelector(" .modal-close");
var overlay = document.querySelector(".modal-overlay");


buyLinks.addEventListener("click", function(event) {
	overlay.classList.remove("modal-hide");
  overlay.classList.add("modal-show");
  cardModal.classList.remove("modal-hide");
  cardModal.classList.add("modal-show");
});
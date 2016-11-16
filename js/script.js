var buyLinks = document.querySelectorAll(".buy");
var cardModal = document.querySelector(".modal-card-add");
var cardModalClose = cardModal.querySelector(" .modal-close");
var mapLink = document.querySelector(".contacts a.map");
var overlay = document.querySelector(".modal-overlay");
var mapFull = document.querySelector(".modal-content-map");
var mapFullClose = mapFull.querySelector(".modal-close");
var card = document.querySelector(".card");
var writeUsLink = document.querySelector(".contacts .write-us");
var writeUsModal = document.querySelector(".modal-write-us");
var writeUsModalClose = writeUsModal.querySelector(" .modal-close");

//   card.addEventListener("click", function(event) {
//   event.preventDefault();
//   overlay.classList.remove("modal-hide");
//   overlay.classList.add("modal-show");
//   cardModal.classList.remove("modal-hide");
//   cardModal.classList.add("modal-show");
// });
// cardModalClose.addEventListener("click", function(event) {
//   overlay.classList.remove("modal-show");
//   overlay.classList.add("modal-hide");
//   cardModal.classList.remove("modal-show");
//   cardModal.classList.add("modal-hide");
// });


mapLink.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-hide");
  overlay.classList.add("modal-show");
  mapFull.classList.remove("modal-hide");
  mapFull.classList.add("modal-show");
});
mapFullClose.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-show");
  overlay.classList.add("modal-hide");
  mapFull.classList.remove("modal-show");
  mapFull.classList.add("modal-hide");
});

// Окно "Напишите нам"
writeUsLink.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-hide");
  overlay.classList.add("modal-show");
  writeUsModal.classList.remove("modal-hide");
  writeUsModal.classList.add("modal-show");
});
writeUsModalClose.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-show");
  overlay.classList.add("modal-hide");
  writeUsModal.classList.remove("modal-show");
  writeUsModal.classList.add("modal-hide");
});

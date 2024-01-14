const openPopupButton = document.querySelector(".open-popup");
const accountPopup = document.getElementById("account-popup");
const closePopupButton = document.querySelector(".close-popup");

openPopupButton.addEventListener("click", () => {
  accountPopup.classList.remove("hidden");
});

closePopupButton.addEventListener("click", () => {
  accountPopup.classList.add("hidden");
});

// Optional: Close popup when clicking outside
document.addEventListener("click", (event) => {
  if (event.target === accountPopup) {
    accountPopup.classList.add("hidden");
  }
});

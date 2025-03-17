// Get modal and button elements
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.querySelector(".close-modal");

// Open modal when button is clicked
openModalButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when close button is clicked
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
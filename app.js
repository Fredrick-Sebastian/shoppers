   // Select toggle button and nav links
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Add click event to toggle the menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

   document.getElementById('productForm').addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('orderConfirmation').style.display = 'block';
      this.reset();
    });

    document.getElementById('deliveryForm').addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('deliveryConfirmation').style.display = 'block';
      this.reset();
    });


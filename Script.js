document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("login-modal");
    const signInBtn = document.getElementById("signInBtn");
    const closeBtn = document.querySelector(".close-btn");
    const loginForm = document.getElementById("login-form");

    // Show the modal when "Sign In" is clicked
    signInBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        loginModal.style.display = "block"; // Show the modal
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", function() {
        loginModal.style.display = "none"; // Hide the modal
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener("click", function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none"; // Hide the modal
        }
    });

    // Handle login form submission (optional)
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Here you can add your login logic
        console.log("Username:", document.getElementById("username").value);
        console.log("Password:", document.getElementById("password").value);
        // Hide the modal after submission
        loginModal.style.display = "none";
    });
});

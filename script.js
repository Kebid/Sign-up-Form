document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    if (password.value !== confirmPassword.value) {
      password.classList.add("invalid");
      confirmPassword.classList.add("invalid");
      event.preventDefault(); // Prevent form submission
    } else {
      password.classList.remove("invalid");
      confirmPassword.classList.remove("invalid");
    }
  });

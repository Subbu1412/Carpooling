document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form inputs
    const usernameOrEmailInput = document.getElementById("usernameOrEmail");
    const passwordInput = document.getElementById("password");

    // Get input values
    const usernameOrEmail = usernameOrEmailInput.value.trim();
    const password = passwordInput.value.trim();

    // Retrieve registration data from local storage
    const registrationDataString = localStorage.getItem("registrationData");

    if (registrationDataString) {
      const registrationData = JSON.parse(registrationDataString);

      // Check if username/email and password match registration data
      if (
        (registrationData.username === usernameOrEmail ||
          registrationData.email === usernameOrEmail) &&
        registrationData.password === password
      ) {
        // Redirect to ride.html upon successful login
        window.location.href = "ride.html";
      } else {
        alert("Invalid username/email or password. Please try again.");
      }
    } else {
      alert("No registration data found. Please sign up first.");
    }
  });
});

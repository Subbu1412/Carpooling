document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const nameInput = document.getElementById("name");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Get input values
    const name = nameInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (name === "") {
      showError(nameInput, "Full Name is required");
      return;
    }

    if (username === "") {
      showError(usernameInput, "Username is required");
      return;
    }

    if (email === "") {
      showError(emailInput, "Email is required");
      return;
    } else if (!isValidEmail(email)) {
      showError(emailInput, "Email is not valid");
      return;
    }

    if (password === "") {
      showError(passwordInput, "Password is required");
      return;
    }

    // Store form values in local storage
    const formValues = {
      name: name,
      username: username,
      email: email,
      password: password,
    };
    localStorage.setItem("registrationData", JSON.stringify(formValues));

    // Redirect to login page after successful registration
    alert("Registered successfully! Now login.");
    window.location.href = "login.html";
  });
});

// Function to show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Function to show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  const small = formControl.querySelector("small");
  small.innerText = "";
}

// Function to validate email
function isValidEmail(email) {
  // Basic email validation using regular expression
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

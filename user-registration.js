function submitForm() {
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address = document.getElementById("address").value;
  var userName = document.getElementById("userName").value;

  var userData = {
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    userName: userName,
  };

  // Store the user data in local storage
  localStorage.setItem("userData", JSON.stringify(userData));

  // Redirect to user profile page
  window.location.href = "Mainpage.html";
}

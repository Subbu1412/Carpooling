document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form inputs
    const carModel = document.getElementById("carModel").value;
    const carNumber = document.getElementById("carNumber").value;
    const licenseNumber = document.getElementById("licenseNumber").value;
    const driverName = document.getElementById("driverName").value;

    // Save details to local storage
    localStorage.setItem("carModel", carModel);
    localStorage.setItem("carNumber", carNumber);
    localStorage.setItem("licenseNumber", licenseNumber);
    localStorage.setItem("driverName", driverName);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  });
});

function submitForm() {
  const form = document.querySelector("form");
  form.dispatchEvent(new Event("submit"));
}

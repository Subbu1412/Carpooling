document.addEventListener("DOMContentLoaded", function () {
  // Retrieve driver details from local storage
  const carModel = localStorage.getItem("carModel");
  const carNumber = localStorage.getItem("carNumber");
  const licenseNumber = localStorage.getItem("licenseNumber");
  const driverName = localStorage.getItem("driverName");

  // Display driver details on the dashboard
  document.getElementById("carModel").textContent = carModel;
  document.getElementById("carNumber").textContent = carNumber;
  document.getElementById("licenseNumber").textContent = licenseNumber;
  document.getElementById("driverName").textContent = driverName;

  // Add functionality to all buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const sectionId = button.closest("section").id;
      switch (sectionId) {
        case "rides":
          handleRideButton(button.textContent);
          break;
        case "earnings":
          handleEarningsButton(button.textContent);
          break;
        case "messages":
          handleMessageButton(button.textContent);
          break;
        // Add cases for other sections if needed
      }
    });
  });
});

function handleRideButton(action) {
  switch (action) {
    case "Edit":
      alert("Unable to edit order now");
      console.log("Editing ride...");
      break;
    case "Cancel":
      alert("Ride cancelled successfully! ");
      console.log("Cancelling ride...");
      break;
    case "View Details":
      alert("we are updating this feature its 'coming soon!' ");
      console.log("Viewing ride details...");
      break;
    case "Create New Ride":
      console.log("Creating new ride...");
      break;
    default:
      break;
  }
}

function handleEarningsButton(action) {
  switch (action) {
    case "Withdraw Earnings":
      alert("Add bank details by contacting customer care");
      console.log("Withdrawing earnings...");
      break;
    default:
      break;
  }
}

function handleMessageButton(action) {
  switch (action) {
    case "Send":
      // Handle send message action
      const messageTextarea = document.querySelector("#messages textarea");
      const message = messageTextarea.value;
      if (message.trim() !== "") {
        // Send the message
        console.log("Sending message:", message);
        // Clear textarea after sending
        messageTextarea.value = "";
      }
      break;
    default:
      break;
  }
}

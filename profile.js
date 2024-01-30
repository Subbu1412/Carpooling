// Retrieve user data from local storage
var userData = JSON.parse(localStorage.getItem("userData"));

// Populate profile details
var profileDetails = document.querySelector("#profile .details");
if (userData) {
  profileDetails.innerHTML = `
        <p><strong>Name:</strong> ${userData.userName}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Phone:</strong> ${userData.phoneNumber}</p>
        <p><strong>Role:</strong> Rider</p>
        <p><strong>Rating:</strong> 4.5/5</p>
        <p><strong>Joined:</strong> ${new Date().toLocaleDateString()}</p>
    `;
}

// Simulated ride history data
var rideHistory = [
  {
    name: "Ride to Work",
    date: "January 15, 2024",
    status: "Completed",
    driver: "Driver Name",
    rating: "5/5",
  },
  {
    name: "Afternoon Pickup",
    date: "January 16, 2024",
    status: "Upcoming",
    driver: "Driver Name",
  },
];

// Populate ride history
var rideHistoryContainer = document.querySelector("#rides .ride-history");
rideHistory.forEach((ride) => {
  rideHistoryContainer.innerHTML += `
        <div class="ride-card">
            <h3>${ride.name}</h3>
            <p>Date: ${ride.date}</p>
            <p>Status: ${ride.status}</p>
            <p>Driver: ${ride.driver}</p>
            ${ride.rating ? `<p>Rating: ${ride.rating}</p>` : ""}
        </div>
    `;
});

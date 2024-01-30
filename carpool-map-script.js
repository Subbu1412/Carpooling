mapboxgl.accessToken =
  "pk.eyJ1Ijoic3ViYnU3NzciLCJhIjoiY2xxYXEzbGNvMXo5aTJrc2c4aHQyOGx1eiJ9.ZjQVpa2yRPFgBfIXCDpI9g";

function initMap() {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40],
    zoom: 9,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var userLocation = {
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        };

        map.setCenter(userLocation);

        new mapboxgl.Marker().setLngLat(userLocation).addTo(map);

        updateDetails("user-location", "Your Location", userLocation);
      },
      function () {
        handleLocationError(true, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, map.getCenter());
  }

  var dropMarker = new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat([-74.5, 40])
    .addTo(map);

  dropMarker.on("dragend", function () {
    var dropLocation = dropMarker.getLngLat();
    reverseGeocode(dropLocation, function (locationName) {
      updateDetails("drop-location", "Drop Location", dropLocation);
      updateDetailsCard(
        "drop-location-details",
        "Drop Location Details",
        dropLocation
      );
    });
  });

  map.on("click", function (event) {
    dropMarker.setLngLat(event.lngLat);
    reverseGeocode(event.lngLat, function (locationName) {
      updateDetails("drop-location", "Drop Location", event.lngLat);
      updateDetailsCard(
        "drop-location-details",
        "Drop Location Details",
        event.lngLat
      );
    });
  });
}

function handleLocationError(browserHasGeolocation, pos) {
  console.error("Error getting user's location");
}

function reverseGeocode(coordinates, callback) {
  var apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.lng},${coordinates.lat}.json?access_token=${mapboxgl.accessToken}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.features && data.features.length > 0) {
        var locationName = data.features[0].place_name;
        callback(locationName);
      } else {
        console.error("Reverse geocoding failed.");
      }
    })
    .catch((error) => {
      console.error("Error during reverse geocoding:", error);
    });
}

function updateDetails(elementId, label, location) {
  var element = document.getElementById(elementId);
  element.innerHTML = `<strong>${label}:</strong> ${location.lat.toFixed(
    4
  )}, ${location.lng.toFixed(4)}`;
}

function updateDetailsCard(elementId, label, location) {
  var element = document.getElementById(elementId);
  element.innerHTML = `<strong>${label}:</strong> ${location.lat.toFixed(
    4
  )}, ${location.lng.toFixed(4)}`;
  document.getElementById("details-card").style.display = "block";
}

function toggleRideForm() {
  var rideForm = document.getElementById("ride-form");
  var displayStatus = rideForm.style.display === "none" ? "block" : "none";
  rideForm.style.display = displayStatus;
}

function offerRide() {
  var startLocation = document.getElementById("start-location-input").value;
  var dropLocation = document.getElementById("drop-location-input").value;
  var dateTime = document.getElementById("date-time-input").value;

  updateDetails("start-location", "Start Location", startLocation);
  updateDetails("drop-location", "Drop Location", dropLocation);
  updateDetails("date-time", "Date & Time", new Date(dateTime));

  alert("Offer Ride Successful!");
}

function requestRide() {
  alert("Request Ride Successful!");
}
function openProfile() {
  window.location.href = "profile.html";
}
function chat() {
  window.location.href = "chat.html";
}

document.addEventListener("DOMContentLoaded", function () {
  initMap();
});

document.addEventListener('DOMContentLoaded', function() {
  // Set the current date and time
  const now = new Date();
  const timeElement = document.getElementById('time');
  console.log(timeElement)
  timeElement.textContent = now.toDateString() + ' at ' + now.toLocaleTimeString();

  // Initialize the map
  function initMap() {
      // Specify your location
      const location = { lat: 20.5937, lng: 78.9629 }; // India coordinates

      // Create a map centered at the specified location
      const map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 8,
      });

      // Place a marker at the location
      const marker = new google.maps.Marker({
          position: location,
          map: map,
      });
  }

  // Call the map initialization function
  initMap();
});

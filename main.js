$(document).ready(function() {

  var placeId = "ChIJt_RYG1VVa0cRVqhCQgXdc6c";
      
  // Create a new map centered on the place
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.866, lng: 151.196},
    zoom: 15
  });
  
  // Create a new PlacesService object
  var service = new google.maps.places.PlacesService(map);
  
  // Use the PlacesService object to get the place details
  service.getDetails({placeId: placeId}, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // Create a marker for the place
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
    }
  });
    


});

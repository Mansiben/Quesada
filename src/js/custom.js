
     $(function () {

    function initMap() {

     var locations = [
      ['95 Saginaw Parkway unit 5A <br/>Cambridge\, ON', 43.391476000000,-80.302139000000, 4],
      ['Kitchener\, ON',43.431556000000,-80.455765000000, 5],
      ['Welllington & John<br />Toronto\, ON', 43.645325000000,-79.389816000000,3],
      ['Brampton\, ON',43.677981000000,-79.721200000000, 2],
      ['Montréal\, QC', 45.498344000000,-73.627368000000, 1]
    ];

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(43.391476000000,-80.302139000000),
            zoom: 8,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var markerImage= '/assets/marker.png';
        

     
         for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
          icon:markerImage
      });

       

                 var infowindow = new google.maps.InfoWindow();

         google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

map.set('styles', styles);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});
     
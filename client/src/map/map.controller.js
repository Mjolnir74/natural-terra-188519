import GoogleMapsLoader from 'google-maps';

class MapController {
    /* @ngInject */
    constructor(DarkSkyService) {
        let mapEl = document.getElementById('map');
        let coords = {
            latitude: -34,
            longitude: 151
        }
        
        function loadMap(coords) {
            let latLng = {
                lat: coords.latitude,
                lng: coords.longitude
            };
            DarkSkyService.refresh(latLng);
            GoogleMapsLoader.KEY = 'AIzaSyCX0JRgjHnzx1vSxnAPu6hNdBuoa3dcpZU';
            GoogleMapsLoader.load((google) => {
                let map = new google.maps.Map(mapEl, {
                    center: latLng,
                    zoom: 10
                });
                
                let marker = new google.maps.Marker({
                    map,
                    position: latLng
                });
                
                google.maps.event.addListener(map, 'click', (e) => {
                    latLng = {
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng()
                    };
                    
                    map.setCenter(latLng);
                    marker.setPosition(latLng);
                    DarkSkyService.refresh(latLng);
                });
            });
        }
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                loadMap(position.coords);
            });
        } else {
            loadMap(coords);
        }
    }
};

export default MapController;

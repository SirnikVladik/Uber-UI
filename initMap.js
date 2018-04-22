var vue = new Vue({
    el: '#result',
    data: {
        cost: 0,
        dist: '0 km',
        time: '0 min.',
    },
});

var calcCost = document.querySelector('.calcCost');
var directionsDisplay;
var map;

function initMap() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var minsk = new google.maps.LatLng(53.9, 27.56667);
    var mapOptions = {
        zoom: 11,
        center: minsk,
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
}

calcCost.addEventListener('click', e => {
    var start = document.getElementById('thirstAddress').value;
    var end = document.getElementById('secondAddress').value;
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [start],
            destinations: [end],
            travelMode: 'DRIVING',
        }, callback);
    });
    
    function callback(response, status) {
        if (status == 'OK') {
            var origins = response.originAddresses;
            var destinations = response.destinationAddresses;
            
            for (var i = 0; i < origins.length; i++) {
                var results = response.rows[i].elements;
                for (var j = 0; j < results.length; j++) {
                    var element = results[j];
                    var distance = element.distance.text;
                    var duration = element.duration.text;
                    var from = origins[i];
                    var to = destinations[j];
                }
            }
            vue.dist = distance;
            vue.time = duration;
            console.log(distance, duration);
    }
}
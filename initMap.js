var vue = new Vue({
    el: '#result',
    data: {
        perKilomiters: 0.185,
        perMinutes: 0.025,
        reservation: 0.9,
        dist: '0 km',
        time: '0 min.',
        distValue: 0,
        timeValue: 0,
        cost: 1.65,
    },
    methods: {
        calculateCost() {
            this.cost = this.reservation + this.distValue * this.perKilomiters * 0.001 + this.timeValue * this.perMinutes * 0.001;
        },
    }
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
                var distanceText = element.distance.text;
                vue.distValue = element.distance.value;
                var durationText = element.duration.text;
                vue.timeValue = element.duration.value;
                var from = origins[i];
                var to = destinations[j];
            };
        };
        if(vue.cost < 1.65) {
            vue.cost == 1.65;
        };
        vue.dist = distanceText;
        vue.time = durationText;
        vue.calculateCost();
        console.log(vue.distValue, vue.timeValue);
    }
}
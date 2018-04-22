/*var calcCost = document.querySelector('.calcCost');

calcCost.addEventListener('click', e => {
    var thirstAddress = document.getElementById('thirstAddress').value;
    var secondAddress = document.getElementById('secondAddress').value;

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 53.9, lng: 27.56667 },
    });
    /*geo = new google.maps.Geocoder();
    geo.geocode({ 'address': thirstAddress }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var home = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        }
        else {
            console.log('Not valid address');
            console.log('results[0].geometry.location');
        }
    });
    geo.geocode({ 'address': secondAddress }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var job = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        }
        else {
            console.log('Not valid address');
            console.log('results[0].geometry.location');
        }
    });*/
    /*var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var request = {
        origin: thirstAddress,
        destination: secondAddress,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
        }
    });
    console.log(thirstAddress);
    console.log(secondAddress);
});*/
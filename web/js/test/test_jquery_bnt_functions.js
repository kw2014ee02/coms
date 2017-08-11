function item_locations() {
    alert("connecting servlet....");
}

function getposdata1() {
    alert("about to load delivery path111....");
    // var myLatLng = {lat: 45.363, lng: -100.044};

    //  var marker = new google.maps.Marker({
    //   position: myLatLng,
    //    map: map,
    //    title: 'Hello World!'
    //  });

    clearMarkers();
    for (var i = 0; i < neighborhoods.length; i++) {
        addMarkerWithTimeout(neighborhoods[i], i * 200);
    }

}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function () {
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

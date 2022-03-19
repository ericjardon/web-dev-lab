var map = L.map('map').setView([19.284076,-99.1355524], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoibHVpc2pvc2U1IiwiYSI6ImNsMDc0dDVtMjAza3gzanM4d3J0ZnMzbzgifQ.NfkxFbGmErrf6AayBjmuXg'
}).addTo(map);
 
//Adding a marker
//L.marker([19.284076,-99.1355524], title='test').addTo(map);

// Adding a marker for each bike
$.ajax({
    dataType: "json",
    url: "api/bikes",
    success: function(result) {
        console.log("Success:", result);
        result.bikes.forEach((b) => {
            L.marker(b.location, title=b.id).addTo(map);
        })
    }
})

$('h1').css('color', 'red');  // get all h1 tags and change their color
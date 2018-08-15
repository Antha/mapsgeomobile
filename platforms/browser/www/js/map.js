<!--PhoneGap Geolocation Plugin Method To Fetch Current Position-->
navigator.geolocation.getCurrentPosition(onSuccess, onError);

<!--Function executes only when location grabbed successfully-->
function onSuccess(position) {
var element = document.getElementById('map');
lati = position.coords.latitude;
long = position.coords.longitude;
initMap();
}

<!--Function executes in the case of error-->
function onError(error) {
alert('code: ' + error.code + 'n' +
'message: ' + error.message + 'n');
}
var map;
var infowindow;

<!--Initializing Google Maps-->
function initMap() {
var pyrmont = {lat: lati, lng: long};
map = new google.maps.Map(document.getElementById('map'), {
center: pyrmont,
zoom: 1
});
document.getElementById('map').style.visibility = 'hidden';
var keyword = location.hash.replace("#","");
document.getElementById("key").innerHTML = keyword.toUpperCase();

<!--Creating Google Maps Places object for nearby locations-->
var service = new google.maps.places.PlacesService(map);
service.nearbySearch({
location: pyrmont,
radius: 500,
types: [keyword]
}, callback);
}

<!--Callback function of Google Maps places service-->
function callback(results, status) {
if (status === google.maps.places.PlacesServiceStatus.OK) {
for (var i = 0; i < results.length; i++) {
var placeLoc = results[i].geometry.location;
var placeName = results[i].name;
var address = results[i].vicinity;
$( "div#display" ).append( $( "<div data-role='collapsible'><h1>" + placeName + "</h1><p>" + address + "</p></div>" ) );
$('[data-role=collapsible').collapsible();
}
$("#map").remove();
}
}

<!--Redirecting from screen 1 to 2-->
function Myfunc(){
var val = document.getElementById("choice").value;
window.location.href = "map.html#"+val;
}

<!--Loading Image-->
function loader(){
$('div.cssload-thecube').hide();
}
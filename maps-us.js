
let metroAreaCenterCoordinates = [37.0902, -95.7129]
let zoomLevel = 4



///map
let map = L.map('bridge-map').setView(metroAreaCenterCoordinates, zoomLevel)

///Bridges

///Verrazano-Narroes Bridge
let bridgeVerrCoordinates =[40.6066,-74.0447]
let VerrMarker = L.marker(bridgeVerrCoordinates).bindPopup("Verrazano-Narrows Bridge<br> Span Length: 1298.4 meters")
.addTo(map)

/// Golden Gate Bridge 
let GoldenGateCoordinates = [37.8199, -122.4783]
let GateMarker = L.marker(GoldenGateCoordinates).bindPopup("Golden Gate Bridge<br> Span Length: 1280.2 meters").addTo(map)

///Mackinac Bridge 
let MackBridgeCoordinates = [45.8174, -84.7278]
let MackMarkerCoordinates = L.marker(MackBridgeCoordinates).bindPopup("Mackinac Bridge<br> Span Length: 1158.0 meters").addTo(map)



///George Washington Bridge
let GeorgeWashCoordinates = [40.8517, -73.9527]
let GerogeMarker = L.marker(GeorgeWashCoordinates).bindPopup("George Washington Bridge<br> Span Length: 1067.0 meters").addTo(map)
 

///Tacoma Narrows Brdige
let TacomaCoordinates = [47.2690, -122.5517]
let TacomaMarker = L.marker(TacomaCoordinates).bindPopup("Tacoma Narrows Brdige<br> Span Length: 853.44<br>  ").addTo(map)


/// Circle
let Bridges = L.circle( metroAreaCenterCoordinates, {
    color: 'Blue',
    radius: 2508050,
    fillOpacity: 0.2
})
.bindPopup("Bridges Area")
.addTo(map)
    



///layers

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYWFiczE5MDEiLCJhIjoiY2s2bGhzc3J3MGI0djNkcGZrZHZnZXNjciJ9.LKZ34rhCH3tLI5eFhBdKrw'
}).addTo(map)



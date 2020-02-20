
let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9



///map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)


///markers
let mctcCoordinates =[44.972, -93.2844]
let mctcMarker = L.marker(mctcCoordinates).addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates).addTo(map)


///layers

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYWFiczE5MDEiLCJhIjoiY2s2bGhzc3J3MGI0djNkcGZrZHZnZXNjciJ9.LKZ34rhCH3tLI5eFhBdKrw'
}).addTo(map)



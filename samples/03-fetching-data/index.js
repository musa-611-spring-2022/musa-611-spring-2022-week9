const map = L.map('map').setView([39.95, -75.16], 16);
const layerGroup = L.layerGroup().addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/mjumbe-test/cl0r2nu2q000s14q9vfkkdsfr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWp1bWJlLXRlc3QiLCJhIjoiY2wwb3BudmZ3MWdyMjNkbzM1c2NrMGQwbSJ9.2ATDPobUwpa7Ou5jsJOGYA', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const showMapData = (features) => {
  const layer = L.geoJSON(features);
  layerGroup.clearLayers();
  layerGroup.addLayer(layer);
};

const fetchMapData = () => {
  fetch('https://opendata.arcgis.com/api/v3/datasets/8ad76bc179cf44bd9b1c23d6f66f57d1_0/downloads/data?format=geojson&spatialRefId=4326')
    .then(resp => resp.json())
    .then(data => {
      showMapData(data);
    });
};

fetchMapData();

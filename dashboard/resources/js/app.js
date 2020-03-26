// // Use bootstrap
// require('./bootstrap');

// // Initialize feather icons
// const feather = require('feather-icons');
// feather.replace();

// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2VkcnZhbmgiLCJhIjoiY2s4N3Y5YnplMDI0OTNsbWpwMzM1bWE2cSJ9.-eXwQtoLHrWZY01jjx9V5g';

// let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11'
// });
import feather from 'feather-icons';

import './bootstrap';
// import './map';

const initApp = () => {
    feather.replace();
}

initApp();
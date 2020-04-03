// // Use bootstrap
require('./bootstrap');

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

// import './bootstrap';

const initApp = () => {
    feather.replace();
}

initApp();

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import { initMap, reverseGeocode } from './map';

// CHECK IF DOM CONTAINER IS FOUND
if(document.querySelector('#map')){

    // Instance map
    const map = initMap();

    let marker = new mapboxgl.Marker()
        .setLngLat([0, 0])
        .addTo(map);

    $('#mapModal').on('shown.bs.modal', () => {
        map.resize();
    })

    map.on('move', function(e) {
        console.log(`Current Map Center: ${map.getCenter()}`);
        marker.setLngLat(map.getCenter());
    });

    map.on('click', function(e) {
        console.log(e.lngLat.wrap());
    })

    $('#mapModal').on('shown.bs.modal', () => {
        map.resize();
    })

    let saveCoordsBtn = document.querySelector('#saveCoords');
    
    saveCoordsBtn.addEventListener('click', async () => {
        // Set coördinates to input field
        let coords = map.getCenter().toArray();
        let inputAddress = document.querySelector('#inputAddress');
        inputAddress.value = await reverseGeocode(coords);;

        // Hide modal
        $('#mapModal').modal('hide');
    });

}
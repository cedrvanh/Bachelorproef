// // Use bootstrap
require('./bootstrap');

import feather from 'feather-icons';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import { initMap, reverseGeocode } from './map';
import { toggleVisibility } from './helper';

const initApp = () => {
    feather.replace();

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
            marker.setLngLat(map.getCenter());
        });

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

    initMessages();
}

if(document.querySelector('#taskType')) {
    let typeInput = document.querySelector('#taskType');
    let typeDom = document.querySelector('.type');
    let types = document.querySelectorAll('.task-type');

    typeInput.addEventListener('change' , (e) => {
        types.forEach(type => {
            type.classList.add('hidden');
        })
        
        document.querySelector(`#type-${e.target.value}`).classList.remove('hidden');     
        document.querySelector(`#type-${e.target.value}`).classList.add('show');     
    });
}

const initMessages = () => {
    $(".alert").fadeTo(2000, 500).fadeOut(1000, function(){
        $(".alert").fadeOut(1000);
    });
}

initApp();


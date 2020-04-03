import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

export const initMap = (coords = null) => {
    mapboxgl.accessToken = process.env.MIX_MAPBOX_APP_KEY;

    return new mapboxgl.Map({
        container: 'map',
        center: coords || [3.719014, 51.053447],
        zoom: 13,
        style: 'mapbox://styles/mapbox/outdoors-v11',
    });
}
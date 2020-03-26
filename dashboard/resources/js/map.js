import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

export default initMap = () => {
    mapboxgl.accessToken = env('MAPBOX_APP_KEY');
    
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });
}

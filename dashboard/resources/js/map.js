import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import { fetchData, getStreetAddress } from './helper';

const MAPBOX_APP_KEY = process.env.MIX_MAPBOX_APP_KEY;

export const initMap = (coords = null) => {
    mapboxgl.accessToken = MAPBOX_APP_KEY;

    return new mapboxgl.Map({
        container: 'map',
        center: coords || [3.719014, 51.053447],
        zoom: 13,
        style: 'mapbox://styles/mapbox/outdoors-v11',
    });
}

export const reverseGeocode = async (coords) => {
    let API_STRING = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords}.json?access_token=${MAPBOX_APP_KEY}`;
    const { features: [{ place_name }] } = await fetchData(API_STRING);

    return getStreetAddress(place_name);
}
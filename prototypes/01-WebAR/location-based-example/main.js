loadStaticPlaces = () => {
    return [
        {
            name: "Bakkerij Stefaan",
            location: {
                lat: 50.842780,
                lng: 3.212051
            }
        },
        {
            name: "B&N Hout",
            location: {
                lat: 50.843022,
                lng: 3.211548
            }
        },
    ]
};

loadDynamicPlaces = async (position) => {
    let params = {
        radius: 300, // Search places in this radius (in meters)
        limit: 10, // Max number of results
        clientId: 'FPFNSEYRZIRR3G5SIMVVKWFP4B2OKJU5K1OEQ4CVXLOJPFLI',
        clientSecret: '3YDSGYRG2RQLPAZ2CKYKDL3AMTIU00GSZ3ZRP2RNDRTGXP1D',
    }

    // Foursquare API
    let endpoint = `https://api.foursquare.com/v2/venues/search?client_id=${params.clientId}&client_secret=${params.clientSecret}&v=20180323
                    &ll=${position.latitude},${position.longitude}&radius=${params.radius}&limit=${params.limit}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    return data.response.venues;
};

renderPlaces = (places) => {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        const { lat, lng } = place.location;

        const marker = document.createElement('a-link');
        marker.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lng};`);
        marker.setAttribute('title', place.name);
        
        marker.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
        });

        scene.appendChild(marker);

        console.log(marker);
        console.log(scene);
    })
};


initApp = () => {
    let method = 'dynamic';

    // If it is neccesary to load static, uncomment the following line:
    // method = 'static'
    if (method === 'static') {
        let places = loadStaticPlaces();
        return renderPlaces(places);
    }

    if (method !== 'static') {
        // Get user location
        return navigator.geolocation.getCurrentPosition((position) => {
            // Load places nearby from API and user coordinates
            loadDynamicPlaces(position.coords)
                .then((places) => renderPlaces(places))
        }, err => console.log(err));
    }
};

initApp();
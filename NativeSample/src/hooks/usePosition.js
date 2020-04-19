import { useState, useEffect } from 'react';

import Geolocation from '@react-native-community/geolocation';

export default usePosition = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);

    const options = {
        enableHighAccuracy: true,
        timeout: 10000
    }

    useEffect(() => {
        // TODO: Use react-native-permissions error handling instead
        if(!Geolocation) {
            setError('Geolocation is not enabled');
            return;
        };

        const onChange = ({ coords }) => {
            setPosition({
                latitude: coords.latitude,
                longitude: coords.longitude,
                heading: coords.heading // User facing direction
            });
        };

        const onError = (error) => {
            setError(error.message);
        }
        
        watcher = Geolocation.watchPosition(onChange, onError, options);

        return () => Geolocation.clearWatch(watcher);
    }, []);


    return {
        position,
        error
    }
}
import { useState, useEffect } from 'react';

import Geolocation from '@react-native-community/geolocation';

const PERMISSION_DENIED = 1;
const POSITION_UNAVAILBLE = 2;
const TIMEOUT = 3;

export default usePosition = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);

    const options = {
        enableHighAccuracy: true,
        timeout: 20000
    }

    useEffect(() => {
        if(!Geolocation) {
            setError('Geolocation API is not available');
            return;
        };

        const onChange = ({ coords }) => {
            setPosition({
                latitude: coords.latitude,
                longitude: coords.longitude,
                heading: coords.heading, // User facing direction,
                speed: coords.speed // Velocity of device (m/s)
            });
        };

        // Catch Geolocation errors by status code
        const onError = (error) => {
            switch (error.code) {
                 // Permission request has been denied
                case PERMISSION_DENIED:
                    setError(error.message);
                    break;
                // Location service of device is turned off
                case POSITION_UNAVAILBLE:
                    setError(error.message);
                    break;
                 // Timeout when fetching for location
                case TIMEOUT:
                    setError(error.message);
                    break;
                default:
                    return;
            }
        }
        
        let watcher = Geolocation.watchPosition(onChange, onError, options);

        return () => Geolocation.clearWatch(watcher);
    }, []);


    return {
        position,
        error
    }
}
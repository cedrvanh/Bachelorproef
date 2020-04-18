import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

export default usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const options = {
        enableHighAccuracy: false,
        timeout: 50000
    }

    useEffect(() => {
        if(!Geolocation) {
            setError('Geolocation is not enabled');
            return;
        };

        const onChange = ({ coords }) => {
            setPosition({
                latitude: coords.latitude,
                longitude: coords.longitude
            });
        };

        const onError = (error) => {
            setError(error.message);
        }

        watcher = Geolocation.watchPosition(onChange, onError, options);

        return () => Geolocation.clearWatch(watcher);
    }, []);


    return {
        ...position,
        error
    }
}
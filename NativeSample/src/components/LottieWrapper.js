import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

export default LottieWrapper = ({ source, autoplay, ...props }) => {
    const animation = useRef(null);

    useEffect(() => {
         if (!autoplay) {
             animation.current.play();
         }
    }, []);

    return (
        <LottieView
            ref={animation}
            source={source}
            autoplay={autoplay}
            {...props}
        />
    )
}
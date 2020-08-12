import React from 'react';
import { Dimensions } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';

import Card from '~/components/Card';

export default Carousel = ({ items, onRouteStart, ...props }) => {
    const { width } = Dimensions.get('window');

    const SCREEN_WIDTH = width;
    const ITEM_WIDTH = SCREEN_WIDTH * 0.8;

    renderCards = ({ item, index }) => {
        return (
            <Card 
                key={item.id} 
                item={item} 
                onRouteStart={onRouteStart}
            />
        );
    }

    return (
        <SnapCarousel
            ref={(c) => { this._carousel = c; }}
            data={items}
            renderItem={renderCards}
            itemWidth={ITEM_WIDTH}
            sliderWidth={SCREEN_WIDTH}

            {...props}
        />
    )
}
import React from 'react';
import { Dimensions } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';

import Card from '~/components/Card';

export default Carousel = ({ cards }) => {
    const { width } = Dimensions.get('window');

    const SCREEN_WIDTH = width;
    const ITEM_WIDTH = SCREEN_WIDTH * 0.8;

    const cardData = [
        {
            id: 1,
            title: 'Gravensteen',
            description: 'The castle is under attack and you are the only one who can help! The castle is under attack and you are the only one who can help!The castle is under attack and you are the only one who can help!The castle is under attack and you are the only one who can help!The castle is under attack and you are the only one who can help!The castle is under attack and you are the only one who can help!'
        },
        {
            id: 2,
            title: 'Sint-Pietersplein',
            description: 'Bandits are hiding inside the park, find them!'
        },
        {
            id: 3,
            title: 'Station',
            description: 'The station is being overrun!'
        },
    ]

    renderCards = ({ item, index }) => {
        return (
            <Card key={index} item={item} />
        );
    }

    return (
        <SnapCarousel
            ref={(c) => { this._carousel = c; }}
            data={cardData}
            renderItem={renderCards}
            itemWidth={ITEM_WIDTH}
            sliderWidth={SCREEN_WIDTH}
        />
    )
}
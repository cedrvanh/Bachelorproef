import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components';
import SnapCarousel from 'react-native-snap-carousel';

import Card from './Card';

export default Carousel = () => {
    const { width } = Dimensions.get('window');

    const SCREEN_WIDTH = width;
    const ITEM_WIDTH = SCREEN_WIDTH * 0.8;

    const cardData = [
        {
            id: 1,
            title: 'Gravensteen',
            description: 'The castle is under attack and you are the only one who can help!'
        },
        {
            id: 2,
            title: 'Sint-Pieters Plein',
            description: 'Bandits are hiding inside the park, find them!'
        },
        {
            id: 3,
            title: 'Station',
            description: 'The station is being overrun!'
        },
    ]

    renderCards = ({ item, index }) => {
        console.log(index)
        return (
            <Card title={item.title} key={index} />
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
import React from 'react';
import styled from 'styled-components';
import AnimatedMultistep from "react-native-animated-multistep";

import { colors, utils } from '~/styles';

import Header from '~/components/Header';
import CreateHeroStep from '~/components/Hero/CreateHeroStep';
import PickClassStep from '~/components/Hero/PickClassStep';
import OverviewStep from '~/components/Hero/OverviewStep';

import { HeroService as _heroService } from '~/services/HeroService';

// Define components for Multi Step Form
const steps = [
    { name: "Step 1", component: CreateHeroStep },
    { name: "Step 2", component: PickClassStep },
    { name: "Step 3", component: OverviewStep },
];

export default HeroScreen = ({ navigation }) => {

    onFinish = async (finalState) => {
        await _heroService.createCharacter(finalState);
        
        navigation.navigate('Story', { character: finalState });
    }

    return (
        <Container>
            <Header title ={ 'Create a hero' } />
            <AnimatedMultistep 
                steps={steps}
                onFinish={onFinish}
                comeInOnNext="fadeIn"
                OutOnNext="fadeOut"
                comeInOnBack="fadeIn"
                OutOnBack="fadeOut"
            />
        </Container>
    )
}

const Container = styled.ScrollView.attrs({
    contentContainerStyle:  {
        flexGrow: 1,
    }
})`
    background-color: ${ colors.PRIMARY_COLOR };
    padding: ${ utils.GUTTER_LARGE };
`
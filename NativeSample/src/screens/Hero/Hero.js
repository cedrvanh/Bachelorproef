import React from 'react';
import styled from 'styled-components';
import AnimatedMultistep from "react-native-animated-multistep";

import { colors, utils } from '~/styles';

import CreateHeroStep from '~/components/Hero/CreateHeroStep';
import PickClassStep from '~/components/Hero/PickClassStep';
import OverviewStep from '~/components/Hero/OverviewStep';

import { HeroService as _heroService } from '~/services/HeroService';
import { handleError } from '~/services/api';

// Define components for Multi Step Form
const steps = [
    { name: "Step 1", component: CreateHeroStep },
    { name: "Step 2", component: PickClassStep },
    { name: "Step 3", component: OverviewStep },
];

export default HeroScreen = ({ navigation }) => {
    onFinish = async (finalState) => {
        try {
            const character = {
                ...finalState, // Name & Gender fields
                class: finalState.class.id,
                user: navigation.getParam('user', 1), // Authenticated user ID,
                gold: 0
            }

            await _heroService.createCharacter(character);

            // Pass character state as a param to next screen
            navigation.navigate('Story', { 
                character: finalState 
            });
        } catch(err) {
            handleError(err);
        }
    }


    return (
        <Container>
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
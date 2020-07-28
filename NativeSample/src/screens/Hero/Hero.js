import React from 'react';
import styled from 'styled-components';
import AnimatedMultistep from "react-native-animated-multistep";

import { colors, utils } from '~/styles';

import Header from '~/components/Header';
import CreateHeroStep from '~/components/Hero/CreateHeroStep';
import PickClassStep from '~/components/Hero/PickClassStep';

const steps = [
    { name: "Step 1", component: CreateHeroStep },
    { name: "Step 2", component: PickClassStep },
];

export default HeroScreen = ({ navigation }) => {
    return (
        <Container>
            <Header title ={ 'Create a hero' } />
            <AnimatedMultistep 
                steps={steps}
                comeInOnNext="fadeInDown"
                OutOnNext="fadeOutDown"
                comeInOnBack="fadeIn"
                OutOnBack="fadeOut"
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: ${ colors.PRIMARY_COLOR };
    padding: ${ utils.GUTTER_LARGE };
`
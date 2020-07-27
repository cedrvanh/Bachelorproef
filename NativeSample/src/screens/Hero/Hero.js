import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

import Header from '~/components/Header';
import Button from '~/components/Button';
import HeroForm from '~/components/HeroForm';
import InteractiveModel from '~/components/InteractiveModel';


export default HeroScreen = ({ navigation }) => {
    return (
        <Container>
            <Header title ={ 'Create a hero' } />
            {/* <HeroForm /> */}
            <InteractiveModel />
            <Button label="Proceed" />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: ${ colors.PRIMARY_COLOR };
    padding: ${ utils.GUTTER_LARGE };
`
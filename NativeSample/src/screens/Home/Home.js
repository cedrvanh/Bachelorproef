import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';
import MapContainer from '../../components/Map/MapContainer';

export default HomeScreen = ({ navigation }) => {
    return <MapContainer />
}

const Container = styled.View`
    flex: 1;
`;

const Title = styled.Text`
    color: ${ colors.PRIMARY_COLOR }
    fontSize: 24px;
`;

const Button = styled.Button`
    background-color: green;
`
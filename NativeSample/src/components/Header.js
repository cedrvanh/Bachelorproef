import React from 'react';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';

import { colors, utils, typography } from '~/styles';

const Header = ({ navigation, title }) => {
    return (
        <Wrapper>
            <Title>{ title || navigation.state.routeName }</Title>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
    height: ${ utils.HEADER_HEIGHT };
    padding: 0 ${ utils.GUTTER };
`

const Title = styled.Text`
    color: ${ colors.WHITE }
    fontSize: ${ typography.FONT_SIZE_HEADING };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
    textTransform: uppercase;
`

export default withNavigation(Header);
import React from 'react';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';

import { colors, utils, typography } from '~/styles';

import Icon from '~/components/Icon';

const Header = ({ navigation, title, back, onBack }) => {
    return (
        <Wrapper>
            {onBack && (
                <BackArrow 
                    name={'ios-arrow-back'} 
                    size={32} 
                    color={colors.WHITE}
                    onPress={onBack}
                />
            )}
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

const BackArrow = styled(Icon)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-16px);
`

export default withNavigation(Header);
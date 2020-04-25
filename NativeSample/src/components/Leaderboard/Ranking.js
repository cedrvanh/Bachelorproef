import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '../../styles';

export default Ranking = ({ position }) => {
    return (
        <RankingView>
            <RankingPosition>
                { position == 1 ? <Icon name="ios-medal" size={ 32 } /> : position }
            </RankingPosition>
        </RankingView>
    )
}

const RankingView = styled.View`
    flex: 0.5;
    justifyContent: center;
`

const RankingPosition = styled.Text`
    color: ${ colors.PRIMARY_LIGHT_COLOR };
    fontSize: ${ typography.FONT_SIZE_HEADING };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
`
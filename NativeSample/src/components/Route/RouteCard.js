import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

import Button from '~/components/Base/Button';
import Icon from '~/components/Base/Icon';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width - 32;
const CARD_HEIGHT = height / 1.75;

export default RouteCard = ({ route, onRouteStart }) => {
    totalReward = () => {
        let values = route.tasks.map(task => task.reward);
        return values.reduce((a, b) => a + b, 0);
    }

    return (
        <RouteContainer>
            <RouteContent>
                <Title>{route.name} - Reward: {totalReward()} gold</Title>
                <Description>
                    {route.description}
                </Description>
                <RouteTasks>
                    <SubTitle>Tasks</SubTitle>
                    <RouteTaskList>
                        {route.tasks.map((task, index) => (
                            <RouteTaskItem key={index}>
                                <Description>
                                    #{index+1} {task.name}
                                </Description>
                            </RouteTaskItem>
                        ))}
                    </RouteTaskList>
                </RouteTasks>
            </RouteContent>
            <Button label='Start Quest' onPress={() => onRouteStart(route.id, 0)} />
        </RouteContainer>
    )
}

const RouteContainer = styled.View`
    position: absolute;
    bottom: 0;
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT}px;
    alignSelf: center;
    justifyContent: flex-end;
    padding: ${utils.GUTTER_LARGE} ${utils.GUTTER_LARGE} 48px ${utils.GUTTER_LARGE};
    borderRadius: ${utils.BORDER_RADIUS};
    backgroundColor: ${colors.WHITE};
    elevation: 1;
`

const RouteContent = styled.ScrollView`
    flex: 1;
`

const RouteTasks = styled.View`
    flex: 1;
    margin: ${utils.GUTTER} 0;
`

const RouteTaskItem = styled.View`
    fontSize: 14px;
`

const RouteTaskList = styled.View`
    flex: 1;
`

const Title = styled.Text`
    fontSize: 20px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.DARK_COLOR};
`

const SubTitle = styled.Text`
    fontSize: 16px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.DARK_COLOR};
`

const Description = styled.Text`
    fontSize: 12px;
    marginTop: 8px;
`
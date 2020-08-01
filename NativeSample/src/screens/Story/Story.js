import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

import Button from '~/components/Base/Button';
import ResponsiveImage from '~/components/ResponsiveImage';

const STORY_IMAGE = require('~/assets/story.png');

export default StoryScreen = ({ navigation }) => {
    const character = navigation.getParam('character', 'Character not found'); // Default value should fetch from database as fallback

    return (
        <Container>
            <StoryContainer>
                <ResponsiveImage 
                    source={ STORY_IMAGE }
                    resizeMode="contain"
                    margin={32}
                />
                <Paragraph>
                    Your name is <Highlight>{ character.name }</Highlight>. A brave <Highlight>{ character.class.name }</Highlight> who is on a quest to conquer the world after the evil King 
                    burned down the town you grew up in.
                </Paragraph>
            </StoryContainer>
            <Button onPress={() => navigation.navigate('Home')} label={"Go on an adventure"} />
        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    background-color: ${ colors.PRIMARY_COLOR };
    padding: ${ utils.GUTTER_LARGE };
`

const StoryContainer = styled.ScrollView.attrs({
    contentContainerStyle:  {
        flexGrow: 1,
    }
})`
`

const Paragraph = styled.Text`
    marginTop: ${ utils.GUTTER };
    color: ${ colors.WHITE };
    textAlign: center;
`

const Highlight = styled.Text`
    textTransform: uppercase;
`
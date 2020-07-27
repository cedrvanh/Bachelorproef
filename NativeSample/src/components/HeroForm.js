import React, { useState } from 'react';
import styled from 'styled-components';

// Import custom form hook
import { useForm } from '~/hooks';

import { colors, utils } from '~/styles';

import Input from './Input';
import Button from './Button';

export default HeroForm = () => {
    const { values, setValue, handleSubmit } = useForm();
    
    const [gender, setGender] = useState();
    
    selectGender = () => {
            
    }

    return (
        <Form>
            <Input 
                onChangeText={(val) => setValue('email', val)}
                name="email"
                placeholder="Character Name"
                label="Name your character"
            />
            <Label>Pick a gender</Label>
            <Card>
                <CardImage>MALE</CardImage>
            </Card>
            <Card>
                <CardImage>FEMALE</CardImage>
            </Card>
        </Form>
    )
}

const Form = styled.View`
    flex: 1;
    paddingTop: ${ utils.GUTTER_LARGE };
`

const Label = styled.Text`
    marginTop: ${ utils.GUTTER };
    color: ${ colors.WHITE };
    fontWeight: bold;
    textTransform: uppercase;
`

const CardContainer = styled.View`
    flexDirection: row;
    marginTop: ${ utils.GUTTER };
`

const Card = styled.TouchableOpacity`
    flex: 1;
    height: 125px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${ colors.PRIMARY_LIGHT_COLOR };
    borderRadius: ${ utils.BORDER_RADIUS_SMALL };
`

const CardImage = styled.Text`
    color: ${ colors.PRIMARY_COLOR };
    fontWeight: bold;
`
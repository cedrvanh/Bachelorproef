import React, { useState } from 'react';
import styled from 'styled-components';

// Import custom form hook
import { useForm } from '~/hooks';

import { colors, utils } from '~/styles';

import Input from '~/components/Base/Input';
import SelectedCard from '~/components/SelectedCard';

export default HeroForm = () => {
    const { setValue } = useForm();    
    const [selectedGender, setSelectedGender] = useState();
    
    const genders = [
        {
            id: 0,
            name: "Male"
        },
        {
            id: 1,
            name: "Female"
        }
    ]

    return (
        <Form>
            <Input 
                onChangeText={(val) => setValue('email', val)}
                name="email"
                placeholder="Character Name"
                label="Name your character"
            />
            <Label>Pick a gender</Label>
            <CardContainer>
                {genders.map((gender) => (
                    <SelectedCard 
                        key={gender.id}
                        data={gender.name}
                        selected={selectedGender === gender.id}
                        onPress={() => setSelectedGender(gender.id)}
                    />
                ))}
            </CardContainer>
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
    justifyContent: space-between;
    marginTop: ${ utils.GUTTER };
`
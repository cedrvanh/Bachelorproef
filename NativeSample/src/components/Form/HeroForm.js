import React, { useState } from 'react';
import styled from 'styled-components';

// Import custom form hook
import { useForm } from '~/hooks';

import { colors, utils } from '~/styles';

import Input from '~/components/Base/Input';
import SelectedCard from '~/components/SelectedCard';
import Button from '~/components/Base/Button';

export default HeroForm = ({ nextStep }) => {
    const { values, setValue } = useForm();    
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

    onSubmit = () => {
        nextStep({
            ...values,
            gender: selectedGender
        });
    }

    return (
        <React.Fragment>
            <Form>
                <Input 
                    onChangeText={(val) => setValue('name', val)}
                    name="name"
                    placeholder="Character Name"
                    label="Name your character"
                />
                <Label>Pick a gender</Label>
                <CardContainer>
                    {genders && genders.map((gender) => (
                        <SelectedCard 
                            key={gender.id}
                            data={gender.name}
                            selected={selectedGender === gender.id}
                            onPress={() => setSelectedGender(gender.id)}
                        />
                    ))}
                </CardContainer>
            </Form>
            <Button onPress={onSubmit} label="Proceed" />
        </React.Fragment>
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
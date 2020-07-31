import React, { useState } from 'react';
import styled from 'styled-components';

// Import custom form hook
import { useForm } from '~/hooks';

import validate from '~/helpers/validate';

import { colors, utils } from '~/styles';

import Input from '~/components/Base/Input';
import Button from '~/components/Base/Button';
import SelectedCard from '~/components/SelectedCard';
import Icon from '~/components/Icon';

export default HeroForm = ({ nextStep }) => {
    const { values, setValue } = useForm();    
    const [selectedGender, setSelectedGender] = useState(0);
    const [errors, setErrors] = useState({});

    const genders = [
        {
            id: 0,
            name: "male"
        },
        {
            id: 1,
            name: "female"
        }
    ]

    onSubmit = () => {
        // If values are validated, set state and go to next step
        if (validateStep()) {
            const state = {
                ...values,
                gender: selectedGender
            };
            nextStep(state);
        }
    }

    // Validate input
    validateStep = () => {
        let validationErrors = validate('character-name', values);
        
        if (!validationErrors) {
            setErrors({});
            return true;
        } else {
            setErrors(validationErrors);
            return false;
        }
    }

    return (
        <React.Fragment>
            <Form>
                <Input 
                    onChangeText={(val) => setValue('name', val)}
                    name="name"
                    placeholder="Character Name"
                    label="Name your character"
                    errors={errors.name}
                />
                <Label>Pick a gender</Label>
                <CardContainer>
                    {genders && genders.map((gender) => (
                        <SelectedCard 
                            key={gender.id}
                            selected={selectedGender === gender.id}
                            onPress={() => setSelectedGender(gender.id)}
                        >
                            <Icon name={`md-${gender.name}`} size={42} color={colors.PLACEHOLDER_COLOR}/>
                        </SelectedCard>
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
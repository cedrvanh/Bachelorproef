import React from 'react';
import styled from 'styled-components';

// Import custom form hook
import { useForm } from '../hooks';

import Input from './Input';
import Button from './Button';

export default HeroForm = () => {
    const { values, setValue, handleSubmit } = useForm();
    
    return (
        <Form>
            <Input 
                onChangeText={(val) => setValue('email', val)}
                name="email"
                placeholder="Character Name"
                label="Name your character"
            />
        </Form>
    )
}

const Form = styled.View`
    flex: 2;
    width: 100%;
`
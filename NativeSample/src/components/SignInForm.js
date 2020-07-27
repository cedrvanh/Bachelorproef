import React from 'react';
import styled from 'styled-components';

import { AuthService as _authService } from '~/services';

// Import custom form hook
import { useForm } from '../hooks';

import Input from './Input';
import Button from './Button';

export default SignInForm = ({ handleLogin }) => {
    const { values, setValue, handleSubmit } = useForm();
    
    _onPress = () => {
        _authService.signIn(values)
            .then(() => {
                handleLogin();
            });
    }

    return (
        <Form>
            <Input 
                onChangeText={(val) => setValue('email', val)}
                name="email"
                placeholder="Enter email"
            />
            <Input 
                onChangeText={(val) => setValue('password', val)}
                name="password"
                placeholder="Enter password"
            />
            <Button 
                label="Sign In"
                onPress={() => handleSubmit(_onPress)}
            />
        </Form>
    )
}

const Form = styled.View`
    flex: 2;
    width: 100%;
`
import React from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components';

import { useForm } from '../hooks';

import Input from './Input';
import Button from './Button';

export default SignInForm = (props) => {
    const { values, setValue, handleSubmit } = useForm();
    
    _onLogin = async () => {
        // await AsyncStorage.setItem('token', values.username);
    }

    return (
        <Form>
            <Input 
                onChangeText={(val) => setValue('username', val)}
                name="username"
                placeholder="Enter name"
            />
            <Input 
                onChangeText={(val) => setValue('password', val)}
                name="password"
                placeholder="Enter password"
            />
            <Button 
                label="Sign In"
                onPress={() => handleSubmit(_onLogin)}
            />
        </Form>
    )
}

const Form = styled.View`
    flex: 2;
    width: 100%;
`
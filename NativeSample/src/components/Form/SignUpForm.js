import React, { useState } from 'react';
import styled from 'styled-components';

import { AuthService as _authService } from '~/services';

// Import custom form hook
import { useForm } from '~/hooks';

import Input from '~/components/Base/Input';
import Button from '~/components/Base/Button';

export default SignInForm = ({ handleRegister }) => {
    const { values, setValue, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});
    
    _onPress = async () => {
        try {
            const { user } = await _authService.signUp(values);
            handleRegister(user);
        } catch (err) {
            setErrors(err.response.data.errors);
        }
    }

    return (
        <Form>
            <Input 
                onChangeText={(val) => setValue('email', val)}
                name="email"
                placeholder="Enter email"
                errors={errors.email}
            />
            <Input 
                onChangeText={(val) => setValue('name', val)}
                name="name"
                placeholder="Enter name"
                errors={errors.name}
            />
            <Input 
                onChangeText={(val) => setValue('password', val)}
                name="password"
                placeholder="Enter password"
                errors={errors.password}
            />
            <Button 
                label="Sign Up"
                onPress={() => handleSubmit(_onPress)}
            />
        </Form>
    )
}

const Form = styled.View`
    flex: 2;
    width: 100%;
`
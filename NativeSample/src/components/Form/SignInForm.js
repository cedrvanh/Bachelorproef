import React, { useState } from 'react';
import styled from 'styled-components';

import { AuthService as _authService } from '~/services';

// Import custom form hook
import { useForm } from '~/hooks';

import Input from '~/components/Base/Input';
import Button from '~/components/Base/Button';

export default SignInForm = ({ handleLogin }) => {
    const { values, setValue, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});

    _onPress = async () => {
        console.log(values);
        try {
            await _authService.signIn(values);
            handleLogin();
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
                onChangeText={(val) => setValue('password', val)}
                name="password"
                placeholder="Enter password"
                password={true}
                errors={errors.password}
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
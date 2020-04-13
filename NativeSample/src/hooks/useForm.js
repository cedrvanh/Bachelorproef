import { useState } from 'react';

export default useForm = () => {
    const [values, setValues] = useState({});

    const handleSubmit = (cb) => {
        try {
            cb();
        } catch {
            console.error('Invalid submit event');
        }
    }

    const setValue = (name, value) => {
        setValues(values => ({
            ...values,
            [name]: value
        }));
    }

    return {
        setValue,
        handleSubmit,
        values
    }
};
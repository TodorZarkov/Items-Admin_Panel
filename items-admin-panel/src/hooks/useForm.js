import { useState } from "react";

export function useForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);

    function onChangeHandler(e) {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    function onSubmitHandler(e) {
        e.preventDefault();

        onSubmit(values)
    }

    return {
        values,
        onChangeHandler,
        onSubmitHandler
    };
};
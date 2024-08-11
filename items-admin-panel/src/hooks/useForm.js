import { useState } from "react";

export function useForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);

    function onChangeHandler(e) {
        if (e.target.files) {
            const blobUrl = URL.createObjectURL(e.target.files[0]);
            setValues(state => ({ ...state, file: blobUrl }));
        }
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));


    };

    function onSubmitHandler(e) {
        e.preventDefault();

        onSubmit(values)
    }

    const changeValues = (newValues) => {
        // todo: the newValues type must be of type initialValues - VALIDATE
        
        setValues(newValues);
    };

    return {
        values,
        onChangeHandler,
        onSubmitHandler,
        changeValues
    };
};
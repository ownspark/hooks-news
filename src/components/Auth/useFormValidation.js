import React from "react";

function useFormValidation(initialState,validate) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    React.useEffect(() => { 
        if (isSubmitting) { 
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                console.log('authenticated', values);
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }
    }, [errors])

    function handleChange(event) { 
        event.persist();
        setValues(previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }));

    }

    function handleBlurr() { 
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    function handleSubmit(event) { 
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
        console.log({ values });
    }


    return { handleSubmit,handleBlurr, handleChange, values, errors, isSubmitting };
}

export default useFormValidation;

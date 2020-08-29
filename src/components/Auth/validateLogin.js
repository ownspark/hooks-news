export default function validateLogin(values) {
    let errors = {};
    //email
    if (!values.email) {
        errors.email = "Email required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    { 
        errors.email = "Invalid email address";
    }
    //password
    if (!values.password) {
        errors.password = "Password required.";
    }
    else if (values.password.length < 6) { 
        errors.password = "Password must contain at least 6 characters.";
    }

    return errors;
}

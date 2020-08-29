import React from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";


const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
}

function Login(props) {
  const { handleSubmit, handleBlurr, handleChange, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE,validateLogin);
  const [login, setLogin ] = React.useState(true);
  

  return (
    <div>
      <h2 className="mv3">{login? "Login" : "Create Account "}</h2>
      <form onSubmit={ handleSubmit } className="flex flex-column">
        {!login && (
          <input
            type="text"
            name="name"
            onBlur={handleBlurr}
            value={values.name}
            placeholder="Your name"
            autoComplete="off"
            onChange={handleChange}
        />)}
        <input type="email"
          name="email"
          onBlur={handleBlurr}
          value={values.email}
          className={errors.email && 'error-input'}
          placeholder="Your email"
          autoComplete="off"
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input type="password"
          name="password"
          onBlur={handleBlurr}
          value={values.password}
          className={errors.password && 'error-input'}
          placeholder="Choose a secure password "
          onChange={handleChange}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div className="flex mt3">
          <button type="submit" className="button pointer mr2" disabled={isSubmitting} style={{ background: isSubmitting ? "grey" : "orange"}}>Submit</button>
          <button type="button" className="pointer button"
            onClick={()=> setLogin(prevLogin=> !prevLogin)}>
           {login ? "need to create an account?":"already have an account?"   } 
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

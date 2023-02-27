//import the hooks from the react
// import { register } from "../../../controllers/authController.js";
// import the logo, formRow, Alert files from the  ../Components/index
// With the help of this method we don't need to import files individually
import React, { useState, useEffect, useContext } from "react";
import { Logo, FormRow, Alert } from "../Components";
import { useAppContext } from "../Context/AppContext";
// import { AppContext } from "../Context/AppContext";
// import { Logo } from "../Components"; -->individually imported
// import { FormRow } from "../Components"; -->individually imported
// import { Alert } from "../Components"; -->individually imported

//import the wrapper from the wrappers/Register_Wrapper
import Wrapper from "../../src/assets/wrappers/Register_Wrapper";
import { useNavigate } from "react-router-dom";

export default function Register() {
const navigate = useNavigate()


  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser, setupUser } = useAppContext();

  // console.log(showAlert);
  // const ss = useAppContext();
  // console.log(ss);
  const toggleMember = (e) => {
    // console.log(e.target);
    // console.log(values.isMember);
    setValues({ ...values, isMember: !values.isMember });
    // console.log(values.isMember);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // console.log(!name);
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      // console.log(email);
      displayAlert();
      return;
    }
    // console.log(values);
    const currentUser = {name, email, password}
    if(isMember) {
      // console.log('already a member')
       setupUser({ currentUser, endPoint: 'login', alertText: 'Login Successful! Redirecting...',} )
      }
      else {
        // registerUser(currentUser)
        setupUser({ currentUser, endPoint: 'register', alertText: 'User Created! Redirecting...',} )
    }
  };

  useEffect(() => {
    if(user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  },[user, navigate])

  return (
    <Wrapper className="full-page">
      {/* <> */}
      {/* <h1> this is a text</h1> */}
      <form className="form" onSubmit={onSubmit}>
        <Logo className="register-logo" />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input  */}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input  */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input  */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" onClick={onSubmit} disabled={isLoading} >
          Submit
        </button>
        {/* Togle button */}
        <p>
          {values.isMember ? "Not A Member Yet?" : "Already a Member?"}
          <button className="btn1" type="button" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
      {/* </> */}
    </Wrapper>
  );
}

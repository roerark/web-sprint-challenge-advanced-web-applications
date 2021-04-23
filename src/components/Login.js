import React, { useEffect, useState } from "react";

import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Login = (props) => {
  const [setToken] = useLocalStorage("token", null);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialState = {
    username: "",
    password: "",
    error: "",
    isLoading: false,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      isLoading: true,
    });
    axios
      .post("http://localhost:5000/api/login", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        setState({
          ...state,
          isLoading: false,
        });
        setToken(res.data.payload);
        props.history.push("/bubble");
      })
      .catch((err) =>
        setState({
          ...state,
          error: err.response.data.error,
          isLoading: false,
        })
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div style={{ display: "flex", flexFlow: "column wrap", margin: "0 auto" }}>
      <form onSubmit={onSubmit}>
        <h1>Welcome to the Bubble App!</h1>
        <label>
          username
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          password
          <input type="text" name="password" onChange={handleChange} />
        </label>
        <div style={{ color: "red" }}>{state.error}</div>
        <button style={{ maxWidth: "100px", margin: "20px auto" }}>
          {state.isLoading ? "loading..." : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.

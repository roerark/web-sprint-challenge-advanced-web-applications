import { Redirect, Route } from "react-router-dom";

import React from "react";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import React from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  sessionStorage.removeItem("access_token");

  return <Redirect to="/auth" />;
};

export default Logout;

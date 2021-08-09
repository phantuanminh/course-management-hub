import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../Loading";
import base64 from "base-64";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("access_token");

  useEffect(() => {
    const requestOptions = {
      headers: { Authorization: "Bearer " + base64.encode(token) },
    };

    // Verify user identity
    const verify = () => {
      fetch("http://localhost:5000/api/verify", requestOptions).then(
        (response) => {
          if (response.status === 201) {
            setLogged(true);
          }
          console.log(token);
          setIsLoading(false);
        }
      );
    };

    verify();
  }, [token]);

  // Wait until request handled
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default PrivateRoute;

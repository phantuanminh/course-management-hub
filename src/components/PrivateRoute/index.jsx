import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("access_token");

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    };

    // Verify user identity
    const verify = () => {
      fetch("http://localhost:5000/api/verify", requestOptions).then(
        (response) => {
          if (response.status === 201) {
            setLogged(true);
          }
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

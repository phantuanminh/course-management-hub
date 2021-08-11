import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../Loading";
import { isAuthenticated } from "../../utils/api";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isAuthenticated().then((response) => {
      if (response.status === 200) {
        setAuth(true);
      }
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component exact {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default PrivateRoute;

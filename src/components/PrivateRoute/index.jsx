import { useState } from 'react'
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [logged, setLogged] = useState(false);
    const token = sessionStorage.getItem('access_token');
    
    // Verify user identity
    const requestOptions = { 
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
    };

    const response = fetch('http://localhost:5000/verify', requestOptions);
    
    if (response.ok) {
        setLogged(true);
    }

    return <Route {...rest} render={(props) => (
        logged
        ? <Component {...props} />
        : <Redirect to='/auth' />
    )} />
}

export default PrivateRoute;
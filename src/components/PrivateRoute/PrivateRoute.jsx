import {Navigate} from 'react-router-dom';
import { useState } from 'react';

const PrivateRoute = ({component}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return isAuthenticated ? <Component /> : <Navigate to="/" />

}

export default PrivateRoute;
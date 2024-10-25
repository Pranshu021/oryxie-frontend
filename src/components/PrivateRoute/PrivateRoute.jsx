import {Navigate, Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
   
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token && token !== "") {
            console.log(localStorage.getItem("token"))
            setIsAuthenticated(true)
        } else {
            console.log(localStorage.getItem("token"))
            setIsAuthenticated(false)
        }
    }, [])

    if (isAuthenticated === null) {
        return <Spinner className="h-16 w-16 text-white-900/50" /> // or return a spinner/loading component
    }

    return isAuthenticated ? children : <Navigate to="/" />

}

export default PrivateRoute;
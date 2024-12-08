import { Navigate, Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spinner } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { addToken } from '../../utils/redux/tokenSlice';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie'
import userService from '../../services/userService';

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const token = useSelector((state) => state.token.value.payload);
    const dispatch = useDispatch();

    const getNewToken = async() => {
        const {response, error} = await userService.userValidateSession()
        if(error) {
            setIsAuthenticated(false)
        } else {
            dispatch(addToken(response?.data?.token));
            console.log("New Token: ", response.data.token);
            setIsAuthenticated(true);
        }
    }

    const authenticateUser = async() => {
        if(token && token !== "") {
            const decodedToken = jwtDecode(token)
            const isTokenExpired = true ? Date.now() > decodedToken.exp * 1000 : false
            if(isTokenExpired) {
                console.log("Token got expired");
                getNewToken()
            } else {
                console.log("Using the OG Token.")
                setIsAuthenticated(true)
            }
        } else {    
            getNewToken();
        }
    }

    useEffect(() => {
        authenticateUser();
    }, [])

    if (isAuthenticated === null) {
        return <Spinner className="h-16 w-16 text-white-900/50" /> // or return a spinner/loading component
    }

    return isAuthenticated ? children : <Navigate to="/" />

}

export default PrivateRoute;
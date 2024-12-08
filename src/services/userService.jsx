import apiConfig from "../utils/apiConfig";
import axios from 'axios';

const userSignUp = async(username, email, password) => {
    const params = {
        username,
        email,
        password
    }
    try {
        const signUpResponse = await axios.post(apiConfig.userSignUpAPI, params)
        return signUpResponse

    } catch(error) {
        return error
    }

}

const userLogIn = async(name, password) => {
    const params = {
        username: name,
        password
    }
    try {
        const loginResponse = await axios.post(apiConfig.userLogin, params, {
            withCredentials: true
        })
        return {
            response: loginResponse,
            error: ""
        }

    } catch(error) {
        return {
            response: "",
            error
        }
    }

}

const userValidateSession = async() => {

    try {
        const sessionResponse = await axios.get(apiConfig.userSession, {
            withCredentials: true
        })

        return {
            response: sessionResponse,
            error: ""
        }

    } catch(error) {
        return {
            response: "",
            error
        }
    }
}  

const userLogout = async(accessToken) => {
    try {
        const userLogoutResponse = await axios.get(apiConfig.userLogout, {
            headers: {
                "Authorization": `Bearer: ${accessToken}`
            },
            withCredentials: true
        })
    
        return {
            response: userLogoutResponse,
            error: ""
        };
    } catch(error) {
        return {
            response: "",
            error
        }
    }

}


const userService = {
    userSignUp,
    userLogIn,
    userValidateSession,
    userLogout
}

export default userService;
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
        const loginResponse = await axios.post(apiConfig.userLogin, params)
        return loginResponse

    } catch(error) {
        return error
    }

}


const userService = {
    userSignUp,
    userLogIn
}

export default userService;
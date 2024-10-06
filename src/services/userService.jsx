import apiConfig from "../utils/apiConfig";
import axios from 'axios';

const userSignUp = (username, email, password) => {
    const params = {
        username,
        email,
        password
    }
    try {
        const signUp = axios.post(`http://localhost:3001/${apiConfig.userSignUpAPI}`, params)
        return 0

    } catch(error) {
        return error
    }

}


const userService = {
    userSignUp
}

export default userService;
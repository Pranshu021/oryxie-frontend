const apiConfig = {
    userSignUpAPI: `${import.meta.env.VITE_API_URL}/user/signup`,
    userLogin: `${import.meta.env.VITE_API_URL}/user/login`,
    userSession: `${import.meta.env.VITE_API_URL}/user/session`,
    userLogout: `${import.meta.env.VITE_API_URL}/user/logout`
}

export default apiConfig;
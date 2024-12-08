import { Button } from "@material-tailwind/react";
import userService from "../../services/userService";
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from "../../utils/redux/tokenSlice";
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector((state) => state.token.value.payload);

    const handleLogout = async() => {
        const { response, error } = await userService.userLogout(accessToken);
        if(error && error !== "") {
            navigate('*')
        }
        dispatch(removeToken());
        navigate('/');
    }

    return (
        <div className="container dashboard-container">
            <h1>Dashboard</h1>
            <Button variant="filled" color="red" onClick={handleLogout}>Log out</Button>
        </div>
    )
}

export default Dashboard;

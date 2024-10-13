import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import userService from "../../services/userService";
import "../../assets/styles/signup.css";

const SignUp = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [inputFieldAlerts, setInputFieldAlerts] = useState({
    username: false,
    email: false,
    password: false
  })

  const navigate = useNavigate();

  const handleSignUpSubmit = async(event) => {
    event.preventDefault();
    setUserData({username: event.target.name.value, email: event.target.email.value, password: event.target.password.value});
    const submit = await userService.userSignUp(event.target.name.value, event.target.email.value, event.target.password.value)

    if(submit == 0) {
      navigate('')
    } else {
      console.log(error)
    }
  }

  return (
    <div className="container:lg container:md container:xs signup-container h-full w-full">
      <div className="grid grid-cols-3">
        <div className="col-start-2 col-span-1 flex place-content-center signup-column">
          <Card
            color="transparent"
            shadow={false}
            className="signup-form flex place-content-center"
          >
            <Typography variant="h4" color="white" className="text-center">
              Sign Up
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSignUpSubmit}>
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-white text-white"
                  name="name"
                  id="name"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-white text-white"
                  name="email"
                  id="email"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="white" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  name="password"
                  id="password"
                  className=" !border-t-blue-gray-200 focus:!border-white text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  minLength={6}
                  maxLength={20}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button type="submit" className="mt-6 signup-button" fullWidth>
                Sign up
              </Button>
              <Typography className="mt-4 text-center font-normal signin-text">
                Already have an account?{" "}
                <Link to="/login" className="font-medium blue underline">
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

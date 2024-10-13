import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import "../../assets/styles/signup.css";

const Login = (props) => {
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
              Login
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">
                  Username or email
                </Typography>
                <Input
                  size="lg"
                  placeholder="Username or Email"
                  className=" !border-t-blue-gray-200 focus:!border-white text-white"
                  name="name"
                  id="name"
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
              <Button type="submit" className="mt-6 signup-button" fullWidth>
                Login
              </Button>
              <Typography className="mt-4 text-center font-normal signin-text">
                Don't have an account?{" "}
                <Link to="/login" className="font-medium blue hover:underline">
                  Sign Up
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

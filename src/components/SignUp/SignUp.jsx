import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import "../../assets/styles/signup.css"

const SignUp = (props) => {
  return (
    <div className="container:lg container:md container:xs signup-container h-full w-full">
      <div className="grid grid-cols-3">
        <div className="col-start-2 col-span-1 flex place-content-center signup-column">
          <Card color="transparent" shadow={false} className="signup-form flex place-content-center">
            <Typography variant="h4" color="white" className="text-center">
              Sign Up
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="white" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
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
              <Button className="mt-6 signup-button" fullWidth>
                Sign up
              </Button>
              <Typography className="mt-4 text-center font-normal signin-text">
                Already have an account?{" "}
                <a href="#" className="font-medium blue underline">
                  Sign In
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

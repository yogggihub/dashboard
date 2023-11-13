import React from "react";
import Button from "../../components/button-component";
function LoginForm() {
  return (
    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
          />
          <label className="form-label" for="form3Example3">
            Email address
          </label>
        </div>
        <div className="form-outline mb-3">
          <input
            type="password"
            id="form3Example4"
            className="form-control form-control-lg"
            placeholder="Enter password"
          />
          <label className="form-label" for="form3Example4">
            Password
          </label>
        </div>
        <div className="text-center text-lg-start mt-4 pt-2">
          <Button className="btn btn-primary btn-lg" id="login_btn">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

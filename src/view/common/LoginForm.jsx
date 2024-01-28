import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button-component";
import { loginUser } from "../../store/userDetailsSlice";
import { loginFields } from "../../const/formFields";
import {login} from "../../utils/login";
function LoginForm() {
  const redirect =  useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(loginFields);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formValue));
    const {id, role} = login();
    if(id) redirect(`/userview/${id}`) ;
  };

  return (
    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form onSubmit={handleOnSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
            name="email"
            value={formValue.email}
            onChange={handleChange}
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
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
          <label className="form-label" for="form3Example4">
            Password
          </label>
        </div>
        <div className="text-center text-lg-start mt-4 pt-2">
          <Button
            type="submit"
            className="btn btn-primary btn-lg"
            id="login_btn"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

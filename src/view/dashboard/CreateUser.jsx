import { useState } from "react";
import { formFields } from "../../const/formFields";
import Button from "../../components/button-component";
import InputField from "../../components/input-component";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
const CreateUser = () => {
  const [formValue, setFormValue] = useState(formFields);
  const { userRole, name, gender, mobile, email, address, password } =
    formValue;
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validation(formValue));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("form has been submit");
    }
  };
  const validation = (values) => {
    const erros = {};
    if (!values?.name) {
      erros.name = "Enter Name";
    }
    if (!values?.email) {
      erros.email = "Enter Email Id";
    }
    if (!values?.password) {
      erros.password = "Enter Password";
    }
    if (!values?.mobile) {
      erros.mobile = "Enter Mobile";
    }
    return erros;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex row">
        <div className="form-group  col-6">
          <label htmlFor="user_role">User Role</label>
          <select
            className="form-control"
            id="user_role"
            value={userRole}
            onChange={handleChange}
            name="userRole"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="form-group  col-6">
          <InputField
            type="text"
            className="form-control"
            labelName="Name"
            name="name"
            id="User_name"
            value={name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <p className="errorMsg">{formError.name}</p>
        </div>
        <div className="form-group  d-flex col-6 align-items-center">
          <div className="form-check">
            <InputField
              className="form-check-input"
              labelName="Male"
              type="radio"
              name="gender"
              id="exampleRadios1"
              value="Male"
              checked={gender === "Male"}
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
            <InputField
              className="form-check-input"
              labelName="Female"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Female"
              checked={gender === "Female"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group  col-6">
          <InputField
            type="number"
            className="form-control"
            labelName="Mobile"
            id="User_mobile"
            placeholder="Enter Mobile No"
            value={mobile}
            name="mobile"
            onChange={handleChange}
          />
           <p className="errorMsg">{formError.mobile}</p>
        </div>
        <div className="form-group  col-6">
          <InputField
            type="email"
            labelName="Email"
            className="form-control"
            id="User_email"
            placeholder="Enter Email Id"
            value={email}
            name="email"
            onChange={handleChange}
          />
           <p className="errorMsg">{formError.email}</p>
        </div>
        <div className="form-group col-6">
          <label>Address</label>
          <textarea
            className="form-control"
            id="user_address"
            rows="3"
            value={address}
            name="address"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group col-6">
          <InputField
            type="password"
            labelName="Password"
            className="form-control"
            id="User_pwd"
            placeholder="Enter Password"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <p className="errorMsg">{formError.password}</p>
        </div>
        <div className="form-group col-6 mt-20">
          <Button className="btn btn-primary btn-lg">Register</Button>
        </div>
      </div>
    </form>
  );
};
export default CreateUser;

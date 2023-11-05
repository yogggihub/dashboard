import { useState } from "react";
import { formFields } from "../../const/formFields";
const CreateUser = () => {
  const [formValue, setFormValue] = useState(formFields);
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
    if(Object.keys(formError).length===0 && isSubmit)
    {
        console.log("form has been submit")
    }
  };
  const validation = (values) => {
    const erros = {};
    if (!values?.name) {
        erros.name="Enter Name"
    }
    return erros
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex row">
        <div className="form-group  col-6">
          <label htmlFor="user_role">User Role</label>
          <select
            className="form-control"
            id="user_role"
            value={formValue.userRole}
            onChange={handleChange}
            name="userRole"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="form-group  col-6">
          <label htmlFor="User_name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="User_name"
            value={formValue.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <p className="errorMsg">{formError.name}</p>
        </div>
        <div className="form-group  d-flex col-6 align-items-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="exampleRadios1"
              value="Male"
              checked={formValue.gender === "Male"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Female"
              checked={formValue.gender === "Female"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Female
            </label>
          </div>
        </div>
        <div className="form-group  col-6">
          <label htmlFor="User_mobile">Mobile</label>
          <input
            type="number"
            className="form-control"
            id="User_mobile"
            placeholder="Enter Mobile No"
            value={formValue.mobile}
            name="mobile"
            onChange={handleChange}
          />
        </div>
        <div className="form-group  col-6">
          <label htmlFor="User_email">Email</label>
          <input
            type="email"
            className="form-control"
            id="User_email"
            placeholder="Enter Email Id"
            value={formValue.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="user_address">Address</label>
          <textarea
            className="form-control"
            id="user_address"
            rows="3"
            value={formValue.address}
            name="address"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group col-6">
          <label htmlFor="User_pwd">Password</label>
          <input
            type="password"
            className="form-control"
            id="User_pwd"
            placeholder="Enter Password"
            value={formValue.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-6 mt-20">
          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};
export default CreateUser;

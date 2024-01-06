import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formFields } from "../../const/formFields";
import { updateUser } from "../../store/userDetailsSlice";
import Button from "../../components/button-component";
import InputField from "../../components/input-component";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
const EditUser = () => {
  const { data: userData } = useSelector((state) => state?.users);
  const dispatch = useDispatch();
  const { userid } = useParams();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(formFields);
  const { userRole, name, gender, mobile, email, password } = formValue;
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [filterData, setFilterData] = useState();
  const [alertMsg, setAlertMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    if (userid) {
      const selectedUser = userData.find((user) => user.id === Number(userid));
      setFilterData(selectedUser);
    }
  }, [userData]);
  useEffect(() => {
    setFormValue({ ...filterData });
  }, [filterData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validation(formValue));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      setAlertMsg("form has been submit");
      dispatch(updateUser(formValue));
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
    <>
      <h1>User Form</h1>
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
            <Button className="btn btn-primary btn-lg">Update User</Button>
          </div>
        </div>
      </form>
      <button
        type="button"
        className="btn-primary 
        mt-20"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <p>{alertMsg}</p>
    </>
  );
};
export default EditUser;

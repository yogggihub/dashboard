import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from '../../store/userDetailsSlice';
const View = () => {
  const { userid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.users);
  const [userData, SetUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    dispatch(getUsers());
    SetUserData(data);
  }, []);
  useEffect(() => {
    if (userid) {
      const selectedUser = userData.filter(
        (item) => item.id === Number(userid)
      );
      setFilterData(selectedUser);
    }
  }, [userData]);
  return (
    <>
      {filterData.map((user) => (
        <div className="profile-container">
          <div>
            <label>Username</label>: {user.id}
          </div>
          <div>
            <label>Your Role</label> : {user.role}
          </div>
          <div>
            <label>Name</label>: {user.name}
          </div>
          <div>
            <label>Gender</label>: {user.gender}
          </div>
          <div>
            <label>Username</label> : {user.mobile}
          </div>
          <div>
            <label>Email</label>: {user.email}
          </div>
          <button className="btn-primary" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      ))}
    </>
  );
};
export default View;

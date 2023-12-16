import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const View = () => {
  const { userid } = useParams();
  const { data, status } = useSelector((state) => state.users);;
  console.log("first", `${userid}`);
  const [userData, SetUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    // SetUserData(JSON.parse(localStorage.getItem("userData")));
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
        </div>
      ))}
    </>
  );
};
export default View;

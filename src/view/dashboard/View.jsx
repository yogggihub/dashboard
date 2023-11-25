import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const View = () => {
  const { userid } = useParams();
  console.log("first", `${userid}`);
  const [userData, SetUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    SetUserData(JSON.parse(localStorage.getItem("userData")));
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
    <table>
      <tbody>
        <tr>
          <th>Sr. No</th>
          <th>User Role</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Mobile</th>
          <th>Email</th>
        </tr>

        {filterData.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.role}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default View;

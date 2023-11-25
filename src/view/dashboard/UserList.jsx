import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserList = () => {
  const [userData, SetUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((data) => data.json())
      .then((rawData) => {
        SetUserData(rawData);
        localStorage.setItem("userData", JSON.stringify(rawData));
      });
  }, []);
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
          <th colSpan="3" className="actionTitle">
            Action
          </th>
        </tr>

        {userData.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.role}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/userview/${user.id}`}>View</Link>
            </td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;

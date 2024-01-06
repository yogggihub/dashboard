import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUsers } from "../../store/userDetailsSlice";
const UserList = () => {
  const { data: userData, status } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (status === "Rejected") {
    return <div>Network Issue</div>;
  }
  const deleteUser = (userId) => {
    let confirm = window.confirm("Are you want to delete the user?");
    if (confirm) {
      dispatch(deleteUsers(userId));
      alert("User has been deleted");
    } else {
      alert("User not been deleted");
    }
  };
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

        {userData?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.role}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/userview/${user.id}`}>View</Link>
            </td>
            <td>
              <Link to={`/EditUser/${user.id}`}>Edit</Link>
            </td>
            <td>
              <a href="#" onClick={() => deleteUser(`${user.id}`)}>
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;

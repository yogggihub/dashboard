import React, { useState } from "react";
const tempArry = [
  {
    id: 1,
    name: "Kruti",
    role: "User",
    gender: "Female",
    mobile: 8888888888,
    email: "kruti@gmail.com",
  },
  {
    id: 2,
    name: "Sachi",
    role: "User",
    gender: "Female",
    mobile: 7777777777,
    email: "sachi@gmail.com",
  },
];
const UserList = () => {
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

        {tempArry.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.role}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;

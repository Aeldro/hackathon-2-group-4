import React from "react";
import UserList from "../components/UserList";

import ButtonAddUser from "../components/ButtonAddUser";

import "./AdminUserManagement.css";

function AdminUserManagement() {
  return (
    <div className="mainAdmin">
      <h1 className="welcome">Welcome</h1>
      <UserList />
      <ButtonAddUser />
    </div>
  );
}
export default AdminUserManagement;

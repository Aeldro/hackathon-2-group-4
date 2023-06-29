import React from "react";
import UserList from "../components/UserList";
import ButtonAddAdmin from "../components/ButtonAddAdmin";

function Admin() {
  return (
    <div>
      <h1>Welcome</h1>
      <UserList />
      <ButtonAddAdmin />
    </div>
  );
}
export default Admin;

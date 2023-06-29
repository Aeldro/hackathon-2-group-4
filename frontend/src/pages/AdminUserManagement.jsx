import React, { useState, useEffect } from "react";

import axios from "axios";

import UserList from "../components/UserList";

import ButtonAddUser from "../components/ButtonAddUser";

import "./AdminUserManagement.css";
import ModalEditUser from "../components/ModalEditUser";

function AdminUserManagement() {
  const [getUsers, setGetUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => {
        setGetUsers(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  return (
    <div className="mainAdmin">
      <h1 className="welcome">Welcome</h1>
      {getUsers.map((el, index) => (
        <UserList key={getUsers[index]} el={el} />
      ))}
      <ButtonAddUser />

      <ModalEditUser />
    </div>
  );
}
export default AdminUserManagement;

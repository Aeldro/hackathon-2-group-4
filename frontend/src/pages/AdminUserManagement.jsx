import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import UserList from "../components/UserList";

import ButtonAddUser from "../components/ButtonAddUser";

import "./AdminUserManagement.css";
import ModalEditUser from "../components/ModalEditUser";

import AuthContext from "../contexts/AuthContext";

function AdminUserManagement() {
  const { isAdmin } = useContext(AuthContext);

  const [getUsers, setGetUsers] = useState([]);

  useEffect(() => {
    if (isAdmin) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
        .then((response) => {
          setGetUsers(response.data);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  }, []);
  return (
    <div className="mainAdmin">
      {isAdmin ? (
        <div>
          <h1 className="welcome">Welcome</h1>
          {getUsers.map((el, index) => (
            <UserList key={getUsers[index]} el={el} />
          ))}
          <ButtonAddUser />

          <ModalEditUser />
        </div>
      ) : (
        useNavigate("/")
      )}
    </div>
  );
}
export default AdminUserManagement;

import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "./AdminUserManagement.css";

import AuthContext from "../contexts/AuthContext";
import UserList from "../components/UserList";

function AdminUserManagement() {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  // State et fonction pour modifier un utilisateur via une modale
  const [showModalEditUser, setShowModalEditUser] = useState(false);
  const handleCloseModalEditUser = () => setShowModalEditUser(false);
  const handleShowModalEditUser = () => setShowModalEditUser(true);

  // State et fonction pour ajouter un utilisateur via une modale
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const handleCloseModalAddUser = () => setShowModalAddUser(false);
  const handleShowModalAddUser = () => setShowModalAddUser(true);

  // State pour récupérer un tableau avec les utilisateurs
  const [getUsers, setGetUsers] = useState([]);

  // State pour récupérer le nom de l'admin
  // const [getAdmin, setGetAdmin] = useState([]);

  // State pour créer des utilisateurs
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createUserAdmin, setCreateUserAdmin] = useState(false);

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

  // Requête pour récupérer le nom de l'admin

  // useEffect(() => {
  //   const { id } = useParams();
  //   if (isAdmin) {
  //     axios
  //       .get(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`)
  //       .then((response) => {
  //         setGetAdmin(response.data);
  //       })
  //       .catch((err) => {
  //         console.error(err.message);
  //       });
  //   }
  // }, []);

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (isAdmin) {
      const newUser = {
        username: createUsername,
        password: createPassword,
        isAdmin: createUserAdmin,
      };

      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, newUser)
        .then((response) => {
          if (response.status === 201) {
            response.send("User created successfully");
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };

  return (
    <div>
      {isAdmin ? (
        <div className="mainAdmin">
          <h1 className="welcome">Welcome</h1>

          {/* Ajouter nom de l'admin dans le h1 */}

          {getUsers.length > 0 ? (
            getUsers.map((user, index) => (
              <>
                {/* Modifier un utilisateur */}
                <button type="button" onClick={handleShowModalEditUser}>
                  <UserList key={getUsers[index]} user={user} />
                </button>
                <Modal
                  show={showModalEditUser}
                  onHide={handleCloseModalEditUser}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modifier un utilisateur</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Votre username"
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className="buttonSubmit"
                      type="submit"
                      onClick={handleCloseModalEditUser}
                    >
                      Enregistrer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            ))
          ) : (
            <p>Pas d'utilisateurs à afficher</p>
          )}
          {/* Ajouter un utilisateur */}
          <button
            className="buttonUser"
            type="button"
            onClick={handleShowModalAddUser}
          >
            Ajouter un utilisateur
          </button>
          <Modal show={showModalAddUser} onHide={handleCloseModalAddUser}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreateUser}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nom d'utilisateur</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Indiquez un nom d'utilisateur"
                    onChange={(event) => {
                      setCreateUsername(event.target.value);
                    }}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Indiquez un mot de passe"
                    onChange={(event) => {
                      setCreatePassword(event.target.value);
                    }}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="L'utilisateur est un administrateur"
                    onChange={(event) => {
                      setCreateUserAdmin(event.target.checked);
                    }}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="buttonSubmit"
                type="submit"
                onClick={handleCloseModalAddUser}
              >
                Enregistrer
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
}
export default AdminUserManagement;

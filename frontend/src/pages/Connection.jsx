/* eslint-disable object-shorthand */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Connection.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

function Connection() {
  const navigate = useNavigate();
  const { userToken, setUser } = useContext(AuthContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const user = {
        username: login,
        password: password,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        user
      );

      if (response.data.token) {
        setUser(response.data.token);
        setIsLoggedIn(true);
        navigate("/calculator");
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(
        "Échec de la connexion. Veuillez vérifier vos informations"
      );
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2 className="succes_message">Vous êtes connecté !</h2>
      </div>
    );
  }

  return (
    <div>
      {!userToken ? (
        <div className="d-flex justify-content-center align-items-center dvh-100">
          <div>
            <h2 className="connection_title ">Bienvenue</h2>
            <div className="connection_container">
              <Form className="">
                <Form.Group>
                  <Form.Label>Identifiant</Form.Label>
                  <Form.Control
                    id="login"
                    name="identifiant"
                    type="text"
                    placeholder="Votre identifiant"
                    value={login}
                    onChange={handleLoginChange}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  {errorMessage && (
                    <p className="error_message">{errorMessage}</p>
                  )}
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                    className="connection_button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Connexion
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <p>Vous etes déjà connecté(e)</p>
      )}
    </div>
  );
}

export default Connection;

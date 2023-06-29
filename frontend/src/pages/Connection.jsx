/* eslint-disable no-alert */
import React, { useState } from "react";
import "./Connection.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "votre@email.com" && password === "votreMotDePasse") {
      setIsLoggedIn(true);
      alert("Connexion réussie !");
    } else {
      setIsLoggedIn(false);
      alert("Échec de la connexion. Veuillez vérifier vos informations.");
    }

    // Réinitialiser les champs après la soumission
    setEmail("");
    setPassword("");
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Vous êtes connecté !</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="connection_header" />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <h2 className="connection_title ">Bienvenue</h2>
          <div className="connection_container">
            <Form className="">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Identifiant</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Votre identifiant"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Votre mot de passe"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button
                  className="connection_button"
                  variant="primary"
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
    </div>
  );
}

export default LoginPage;

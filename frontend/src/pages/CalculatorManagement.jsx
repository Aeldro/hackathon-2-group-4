/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import "./CalculatorManagement.css";

function CalculatorManagement() {
  const { userToken, isAdmin } = useContext(AuthContext);
  const [getRam, setGetRam] = useState([]);
  const [getNetwork, setGetNetwork] = useState([]);
  const [getStorage, setGetStorage] = useState([]);
  const [getIntegrity, setGetIntegrity] = useState([]);
  const [getCategory, setGetCategory] = useState([]);

  useEffect(() => {
    if (isAdmin) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/rams`)
        .then((response) => {
          setGetRam(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/storages`)
        .then((response) => {
          setGetStorage(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/networks`)
        .then((response) => {
          setGetNetwork(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
        .then((response) => {
          setGetCategory(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/integrities`)
        .then((response) => {
          setGetIntegrity(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="calc-manag-page">
      {isAdmin ? (
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="calc-manag-title">
            <h1>Gestion du Calculateur</h1>
            <p>
              Cliquez sur on onglet pour afficher et ajouter/modifier/supprimer
              les informations.
            </p>
          </div>
          <Accordion className="accordion" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-header">
                RAM
              </Accordion.Header>
              <Accordion.Body>
                {getRam.map((item) => (
                  <div className="element">
                    <p key={item.id}>{item.name}</p>
                    <div className="buttons">
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <PencilFill size="1.25rem" />
                      </button>
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <TrashFill color="red" size="1.25rem" />
                      </button>
                    </div>
                  </div>
                ))}
                <Button className="add-button" onClick={handleShow}>
                  Ajouter
                </Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordion-header">
                Mémoires
              </Accordion.Header>
              <Accordion.Body>
                {getStorage.map((item) => (
                  <div className="element">
                    <p key={item.id}>{item.name}</p>
                    <div className="buttons">
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <PencilFill size="1.25rem" />
                      </button>
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <TrashFill color="red" size="1.25rem" />
                      </button>
                    </div>
                  </div>
                ))}
                <Button className="add-button">Ajouter</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordion-header">
                Réseaux
              </Accordion.Header>
              <Accordion.Body>
                {getNetwork.map((item) => (
                  <div className="element">
                    <p key={item.id}>{item.name}</p>
                    <div className="buttons">
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <PencilFill size="1.25rem" />
                      </button>
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <TrashFill color="red" size="1.25rem" />
                      </button>
                    </div>
                  </div>
                ))}
                <Button className="add-button">Ajouter</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="accordion-header">
                Etats
              </Accordion.Header>
              <Accordion.Body>
                {getIntegrity.map((item) => (
                  <div className="element">
                    <p key={item.id}>{item.name}</p>
                    <div className="buttons">
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <PencilFill size="1.25rem" />
                      </button>
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <TrashFill color="red" size="1.25rem" />
                      </button>
                    </div>
                  </div>
                ))}
                <Button className="add-button">Ajouter</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Catégories</Accordion.Header>
              <Accordion.Body>
                {getCategory.map((item) => (
                  <div className="element">
                    <p key={item.id}>{item.name}</p>
                    <div className="buttons">
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <PencilFill size="1.25rem" />
                      </button>
                      <button
                        type="button"
                        onClick={() => console.info(item.name)}
                      >
                        <TrashFill color="red" size="1.25rem" />
                      </button>
                    </div>
                  </div>
                ))}
                <Button className="add-button">Ajouter</Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ) : userToken ? (
        useNavigate("/calculator")
      ) : (
        useNavigate("/")
      )}
    </div>
  );
}

export default CalculatorManagement;

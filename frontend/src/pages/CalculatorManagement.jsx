/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
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

  const [addRam, setAddRam] = useState(false);
  const [editRam, setEditRam] = useState(false);
  const [addMemory, setAddMemory] = useState(false);
  const [editMemory, setEditMemory] = useState(false);
  const [addNetwork, setAddNetwork] = useState(false);
  const [editNetwork, setEditNetwork] = useState(false);
  const [addIntegrity, setAddIntegrity] = useState(false);
  const [editIntegrity, setEditIntegrity] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(false);

  const handleCloseAddRam = () => setAddRam(false);
  const handleShowAddRam = () => setAddRam(true);
  const handleCloseEditRam = () => setEditRam(false);
  const handleShowEditRam = () => setEditRam(true);
  const handleCloseAddMemory = () => setAddMemory(false);
  const handleShowAddMemory = () => setAddMemory(true);
  const handleCloseEditMemory = () => setEditMemory(false);
  const handleShowEditMemory = () => setEditMemory(true);
  const handleCloseAddNetwork = () => setAddNetwork(false);
  const handleShowAddNetwork = () => setAddNetwork(true);
  const handleCloseEditNetwork = () => setEditNetwork(false);
  const handleShowEditNetwork = () => setEditNetwork(true);
  const handleCloseAddIntegrity = () => setAddIntegrity(false);
  const handleShowAddIntegrity = () => setAddIntegrity(true);
  const handleCloseEditIntegrity = () => setEditIntegrity(false);
  const handleShowEditIntegrity = () => setEditIntegrity(true);
  const handleCloseAddCategory = () => setAddCategory(false);
  const handleShowAddCategory = () => setAddCategory(true);
  const handleShowEditCategory = () => setEditCategory(true);
  const handleCloseEditCategory = () => setEditCategory(false);

  return (
    <div className="calc-manag-page">
      {isAdmin ? (
        <div>
          <Modal show={addRam} onHide={handleCloseAddRam}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter une RAM</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: 16 Go" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Prix en euros" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddRam}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseAddRam}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={editRam} onHide={handleCloseEditRam}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier la RAM</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: 16 Go" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Prix en euros" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditRam}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseEditRam}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={addMemory} onHide={handleCloseAddMemory}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un stockage</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: 512 Go" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Prix en euros" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddMemory}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseAddMemory}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={editMemory} onHide={handleCloseEditMemory}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier un stockage</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: 512 Go" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Prix en euros" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditMemory}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseEditMemory}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={addNetwork} onHide={handleCloseAddNetwork}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un réseau</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: 4G" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Prix en euros" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddNetwork}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseAddNetwork}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={editNetwork} onHide={handleCloseEditNetwork}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier un réseau</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: 4G" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Prix en euros" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditNetwork}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseEditNetwork}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={addIntegrity} onHide={handleCloseAddIntegrity}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un état</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: Bon état" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Pourcentage de réduction" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddIntegrity}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseAddIntegrity}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={editIntegrity} onHide={handleCloseEditIntegrity}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier un état</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: Bon état" />
              <label htmlFor="">Prix</label>
              <input type="number" placeholder="Pourcentage de réduction" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditIntegrity}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseEditIntegrity}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={addCategory} onHide={handleCloseAddCategory}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter une catégorie</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: C" />
              <label htmlFor="">Prix minimum</label>
              <input type="number" placeholder="Prix minimum" />
              <label htmlFor="">Prix maximum</label>
              <input type="number" placeholder="Prix maximum" />
              <label htmlFor="">Code couleur</label>
              <input type="text" placeholder="Exemple: #ffffff" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddCategory}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseAddCategory}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={editCategory} onHide={handleCloseEditCategory}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier une catégorie</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInputs">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder="Exemple: C" />
              <label htmlFor="">Prix minimum</label>
              <input type="number" placeholder="Prix minimum" />
              <label htmlFor="">Prix maximum</label>
              <input type="number" placeholder="Prix maximum" />
              <label htmlFor="">Code couleur</label>
              <input type="text" placeholder="Exemple: #ffffff" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditCategory}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseEditCategory}>
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
                      <button type="button" onClick={handleShowEditRam}>
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
                <Button className="add-button" onClick={handleShowAddRam}>
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
                      <button type="button" onClick={handleShowEditMemory}>
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
                <Button className="add-button" onClick={handleShowAddMemory}>
                  Ajouter
                </Button>
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
                      <button type="button" onClick={handleShowEditNetwork}>
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
                <Button className="add-button" onClick={handleShowAddNetwork}>
                  Ajouter
                </Button>
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
                      <button type="button" onClick={handleShowEditIntegrity}>
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
                <Button className="add-button" onClick={handleShowAddIntegrity}>
                  Ajouter
                </Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Catégories</Accordion.Header>
              <Accordion.Body>
                {getCategory.map((item) => (
                  <div className="element">
                    <p key={item.id}>{item.name}</p>
                    <div className="buttons">
                      <button type="button" onClick={handleShowEditCategory}>
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
                <Button className="add-button" onClick={handleShowAddCategory}>
                  Ajouter
                </Button>
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

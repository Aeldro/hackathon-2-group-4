import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import axios from "axios";
import "./CalculatorManagement.css";

function CalculatorManagement() {
  const [getRam, setGetRam] = useState([]);
  const [getNetwork, setGetNetwork] = useState([]);
  const [getStorage, setGetStorage] = useState([]);
  const [getIntegrity, setGetIntegrity] = useState([]);
  const [getCategory, setGetCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ram`)
      .then((response) => {
        setGetRam(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/storages`)
      .then((response) => {
        setGetStorage(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/networks`)
      .then((response) => {
        setGetNetwork(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((response) => {
        setGetCategory(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/integrities`)
      .then((response) => {
        setGetIntegrity(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="calc-manag-page">
      <div className="calc-manag-title">
        <h1>Gestion du Calculateur</h1>
        <p>
          Cliquez sur on onglet pour afficher et ajouter/modifier/supprimer les
          informations.
        </p>
      </div>
      <Accordion className="accordion" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header">RAM</Accordion.Header>
          <Accordion.Body>
            {getRam.map((item) => (
              <div className="element">
                <p key={item.id}>{item.name}</p>
                <div className="buttons">
                  <button type="button" onClick={() => console.info(item.name)}>
                    <PencilFill size="1.25rem" />
                  </button>
                  <button type="button" onClick={() => console.info(item.name)}>
                    <TrashFill color="red" size="1.25rem" />
                  </button>
                </div>
              </div>
            ))}
            <Button className="add-button">Ajouter</Button>
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
                  <button type="button" onClick={() => console.info(item.name)}>
                    <PencilFill size="1.25rem" />
                  </button>
                  <button type="button" onClick={() => console.info(item.name)}>
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
                  <button type="button" onClick={() => console.info(item.name)}>
                    <PencilFill size="1.25rem" />
                  </button>
                  <button type="button" onClick={() => console.info(item.name)}>
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
                  <button type="button" onClick={() => console.info(item.name)}>
                    <PencilFill size="1.25rem" />
                  </button>
                  <button type="button" onClick={() => console.info(item.name)}>
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
                  <button type="button" onClick={() => console.info(item.name)}>
                    <PencilFill size="1.25rem" />
                  </button>
                  <button type="button" onClick={() => console.info(item.name)}>
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
  );
}

export default CalculatorManagement;

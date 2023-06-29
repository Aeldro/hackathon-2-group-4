import React, { useContext, useState, useEffect } from "react";
import "./Calculator.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Calculator() {
  const [getRam, setGetRam] = useState([]);
  const [getStorages, setGetStorages] = useState([]);
  const [getIntegrities, setGetIntegrities] = useState([]);
  const [getCategories, setGetCategories] = useState([]);
  const [getNetworks, setGetNetworks] = useState([]);
  const [networkValue, setNetworkValue] = useState(0);
  const [ramValue, setRamValue] = useState(0);
  const [storageValue, setStorageValue] = useState(0);
  const [integrityValue, setIntegrityValue] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const navigate = useNavigate();

  const { userToken, verifAdmin } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/rams`)
      .then((response) => {
        setGetRam(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/storages`)
      .then((response) => {
        setGetStorages(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/integrities`)
      .then((response) => {
        setGetIntegrities(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/networks`)
      .then((response) => {
        setGetNetworks(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((response) => {
        setGetCategories(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    verifAdmin();
  }, [userToken]);

  const handleCalculate = () => {
    const addition = networkValue + ramValue + storageValue;
    if (integrityValue > 0) {
      setFinalPrice(parseInt((addition * integrityValue) / 100, 10));
    } else {
      setFinalPrice(parseInt(addition, 10));
    }
  };

  const isPriceInRange = () => {
    if (finalPrice > 0 && getCategories.length > 0) {
      const category = getCategories.find(
        (cat) => finalPrice >= cat.min_price && finalPrice <= cat.max_price
      );
      return category ? category.name : null;
    }
    return null;
  };
  const isColor = () => {
    if (finalPrice > 0 && getCategories.length > 0) {
      const category = getCategories.find(
        (cat) => finalPrice >= cat.min_price && finalPrice <= cat.max_price
      );
      return category ? category.color : null;
    }
    return null;
  };
  return (
    <Card className="card-calculator">
      {userToken ? (
        <Card.Body className="card-body-calculator">
          <h1>Calculateur de prix</h1>
          <br />
          <p>RAM </p>
          <Form.Select
            aria-label="Type de RAM"
            size="sm"
            onChange={(e) => setRamValue(parseInt(e.target.value, 10))}
          >
            <option>Quel est le type de RAM?</option>
            {getRam.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.name}
                </option>
              );
            })}
          </Form.Select>
          <br />
          <p>Stockage </p>
          <Form.Select
            aria-label="Capacité de stockage"
            size="sm"
            onChange={(e) => setStorageValue(parseInt(e.target.value, 10))}
          >
            <option>Quelle est la capacité de stockage?</option>
            {getStorages.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.name}
                </option>
              );
            })}
          </Form.Select>
          <br />
          <p>Réseau</p>
          <Form.Select
            aria-label="Type de réseau"
            size="sm"
            onChange={(e) => setNetworkValue(parseInt(e.target.value, 10))}
          >
            <option>Quel est le type de Réseau?</option>
            {getNetworks.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.name}
                </option>
              );
            })}
          </Form.Select>
          <br />
          <p>Etat </p>{" "}
          <Form.Select
            aria-label="Etat du téléphone"
            size="sm"
            onChange={(e) => setIntegrityValue(parseInt(e.target.value, 10))}
          >
            <option>Quel est l'etat du téléphone ?</option>
            {getIntegrities.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.name}
                </option>
              );
            })}
          </Form.Select>
          <br />
          <Button variant="outline-primary" onClick={handleCalculate}>
            Calculer
          </Button>
          {/* <p>Prix final: {finalPrice}</p>
          <p></p> */}
          {finalPrice > 0 && (
            <p>
              Prix conseillé:{" "}
              {isPriceInRange() ? (
                <span
                  style={{ color: `${isColor().toLowerCase()}` }}
                  className={`color-${isPriceInRange().toLowerCase()}`}
                >
                  {finalPrice} ({isPriceInRange()})
                </span>
              ) : (
                finalPrice
              )}
            </p>
          )}
        </Card.Body>
      ) : (
        navigate("/")
      )}
    </Card>
  );
}

export default Calculator;

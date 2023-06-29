/* eslint-disable no-alert */
import React /* { useState, useEffect } */ from "react";
import "./Calculator.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Calculator() {
  // const [getRam, setGetRam] = useState("");

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/ram`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(setGetRam(data));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  return (
    <Card className="card-calculator">
      <Card.Body className="card-body-calculator">
        <h1>Calculateur de prix</h1>
        <br />
        <Form.Select aria-label="Type de RAM" size="sm">
          <option>Quel est le type de RAM?</option>
          {/* {getRam.map((el) => {
            return <option value={el.id}>{el.name}</option>;
          })} */}
          <option value="1">1 GO</option>
          <option value="2">2 GO</option>
          <option value="3">3 GO</option>
          <option value="4">4 GO</option>
          <option value="5">6 GO</option>
          <option value="6">8 GO</option>
          <option value="7">12 GO</option>
          <option value="8">16 GO</option>
        </Form.Select>
        <br />
        <Form.Select aria-label="Capacité de stockage" size="sm">
          <option>Quelle est la capacité de stockage?</option>
          <option value="1">16 GO</option>
          <option value="2">32 GO</option>
          <option value="3">64 GO</option>
          <option value="4">128 GO</option>
          <option value="5">256 GO</option>
          <option value="6">512 GO</option>
          <option value="7">1000 GO</option>
        </Form.Select>
        <br />
        <Form.Select aria-label="Type de réseau" size="sm">
          <option>Quel est le type de Réseau?</option>
          <option value="1">4G</option>
          <option value="2">5G</option>
        </Form.Select>
        <br />
        <Form.Select aria-label="Etat du téléphone" size="sm">
          <option>Quel est l'etat du téléphone ?</option>
          <option value="1">Bon état</option>
          <option value="2">Très bon état</option>
          <option value="3">Parfait état</option>
        </Form.Select>
        <br />
        <Button variant="outline-primary">Calculer</Button>
      </Card.Body>
    </Card>
  );
}

export default Calculator;

// import React, { useState, useEffect } from "react";
// import "./Calculator.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import axios from "axios";

// function CalculateButton() {
//   const [getRam, setGetRam] = useState([]);
//   const [getCategories, setGetCategories] = useState([]);
//   const [getStorages, setGetStorages] = useState([]);
//   const [getIntegrities, setGetIntegrities] = useState([]);
//   const [getNetworks, setGetNetworks] = useState([]);

//   return (
//     <Card className="card-calculator">
//       <Card.Body className="card-body-calculator">
//         <h1>Calculateur de prix</h1>
//         <br />
//         <Form.Select aria-label="Type de RAM" size="sm">
//           <option>Quel est le type de RAM?</option>
//           {getRam.map((el) => {
//             return (
//               <option key={el.id} value={el.id}>
//                 {el.name}
//               </option>
//             );
//           })}
//         </Form.Select>
//         <br />
//         <Form.Select aria-label="Capacité de stockage" size="sm">
//           <option>Quelle est la capacité de stockage?</option>
//           {getStorages.map((el) => {
//             return (
//               <option key={el.id} value={el.id}>
//                 {el.name}
//               </option>
//             );
//           })}
//         </Form.Select>
//         <br />
//         <Form.Select aria-label="Type de réseau" size="sm">
//           <option>Quel est le type de Réseau?</option>
//           {getNetworks.map((el) => {
//             return (
//               <option key={el.id} value={el.id}>
//                 {el.name}
//               </option>
//             );
//           })}
//         </Form.Select>
//         <br />
//         <Form.Select aria-label="Etat du téléphone" size="sm">
//           <option>Quel est l'etat du téléphone ?</option>
//           {getIntegrities.map((el) => {
//             return (
//               <option key={el.id} value={el.id}>
//                 {el.name}
//               </option>
//             );
//           })}
//         </Form.Select>
//         <br />
//         <Button variant="outline-primary">Calculer</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CalculateButton;

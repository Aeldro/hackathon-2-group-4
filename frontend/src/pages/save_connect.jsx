// import React, { useState } from "react";
// import "./Connection.css";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "votre@email.com" && password === "votreMotDePasse") {
//       setIsLoggedIn(true);
//       alert("Connexion réussie !");
//     } else {
//       setIsLoggedIn(false);
//       alert("Échec de la connexion. Veuillez vérifier vos informations.");
//     }

//     // Réinitialiser les champs après la soumission
//     setEmail("");
//     setPassword("");
//   };

//   if (isLoggedIn) {
//     return (
//       <div>
//         <h2>Vous êtes connecté !</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="header" />
//       <div>
//         <h2 className="title">Bienvenue</h2>
//         <div className="connection">
          
//           <form onSubmit={handleSubmit}>
//             <div className="identifiant">
//               <label htmlFor="email">Identifiant</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />
//             </div>
//             <div className="password">
//               <label htmlFor="password">Mot de passe</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//               />
//             </div>
//             <button type="submit">Connexion</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginPage;
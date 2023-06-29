/* eslint-disable no-nested-ternary */
import { useContext } from "react";
import { Link } from "react-router-dom";

// Imports CSS
import "./Navbar.css";

// Imports images
import logo from "../assets/images/Logo_Emmaus_Connect_white.png";
import close from "../assets/icons/close.svg";
import calculatorManagement from "../assets/icons/calculator_management.svg";
import usersManagement from "../assets/icons/users_management.svg";
import calculator from "../assets/icons/calculator.svg";
import disconnect from "../assets/icons/disconnect.svg";

// Import contexts
import MenuContext from "../contexts/MenuContext";
import AuthContext from "../contexts/AuthContext";

function Navbar() {
  const { isMenuShow, setIsMenuShow } = useContext(MenuContext);
  const { userToken, setUser, isAdmin } = useContext(AuthContext);

  return (
    <nav>
      <div className="logoContainer">
        <img className="logo" src={logo} alt="Logo d'Emmaüs Connect" />
      </div>
      {isAdmin ? (
        <div>
          <button
            type="button"
            className="burger"
            onClick={() => setIsMenuShow(true)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`menu z-3 ${isMenuShow ? "showMenu" : null}`}>
            <button type="button" onClick={() => setIsMenuShow(false)}>
              <img src={close} alt="Croix de fermeture du menu" />
            </button>
            <button
              type="button"
              className="calculatorIcon"
              onClick={() => setIsMenuShow(false)}
            >
              <Link to="/calculator">
                <img src={calculator} alt="Icone du calculateur" />
                <p>&nbsp;Calculateur</p>
              </Link>
            </button>
            <button
              type="button"
              className="usersManagement"
              onClick={() => setIsMenuShow(false)}
            >
              <Link to="/users-management">
                <img
                  src={usersManagement}
                  alt="Icone de gestion des utilisateurs"
                />
                <p>&nbsp;Gestionnaire des utilisateurs</p>
              </Link>
            </button>
            <button
              type="button"
              className="calculatorManagement"
              onClick={() => setIsMenuShow(false)}
            >
              <Link to="/calculator-management">
                <img
                  src={calculatorManagement}
                  alt="Icone de gestion du calculateur"
                />
                <p>&nbsp;Gestionnaire du calculateur</p>
              </Link>
            </button>
            <button
              type="button"
              className="disconnectLink"
              onClick={() => {
                setUser();
                setIsMenuShow(false);
              }}
            >
              <Link to="/">
                <img src={disconnect} alt="Icone de déconnection" />
                <p>&nbsp;Se déconnecter</p>
              </Link>
            </button>
          </div>
        </div>
      ) : userToken ? (
        <button
          type="button"
          className="disconnectLink"
          onClick={() => {
            setUser();
            setIsMenuShow(false);
          }}
        >
          <Link to="/">
            <img src={disconnect} alt="Icone de déconnection" />
            <p>&nbsp;Se déconnecter</p>
          </Link>
        </button>
      ) : null}
    </nav>
  );
}

export default Navbar;

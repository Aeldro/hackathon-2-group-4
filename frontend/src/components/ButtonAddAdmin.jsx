import { Link } from "react-router-dom";

import "./ButtonAddAdmin.css";

function ButtonAddAdmin() {
  return (
    <Link to="/">
      <button className="buttonAdmin" type="button">
        Ajouter un administrateur
      </button>
    </Link>
  );
}
export default ButtonAddAdmin;

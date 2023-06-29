import { Link } from "react-router-dom";

function ButtonAddUser() {
  return (
    <Link to="/add-user">
      <button className="buttonUser" type="button">
        Ajouter un utilisateur
      </button>
    </Link>
  );
}
export default ButtonAddUser;

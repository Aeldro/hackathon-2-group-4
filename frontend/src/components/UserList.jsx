// Import logos
import { Link } from "react-router-dom";
import iconAdminProfil from "../assets/icons/icon-admin-profil-yellow.svg";
import iconChevronRightBlue from "../assets/icons/icon-chevron-right-blue.svg";

function UserList() {
  return (
    <Link to="/edit-user">
      <div className="manageUser divider">
        <img
          className="logos"
          src={iconAdminProfil}
          alt="icon admin's profil"
        />
        <p>username</p>
        <img className="logos" src={iconChevronRightBlue} alt="chevron right" />
      </div>
    </Link>
  );
}
export default UserList;

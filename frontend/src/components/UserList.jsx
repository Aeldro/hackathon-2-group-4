/* eslint-disable react/prop-types */
// Import logos
import { Link } from "react-router-dom";
import iconAdminProfil from "../assets/icons/icon-admin-profil-yellow.svg";
// import iconUserProfil from "../assets/icons/icon-user-profil-blue.svg";
import iconChevronRightBlue from "../assets/icons/icon-chevron-right-blue.svg";

// import UserContext from "../contexts/UserContext";

function UserList({ el }) {
  // const { isAdmin, setIsAdmin } = useContext(UserContext);
  return (
    <Link to="/edit-user">
      <div className="manageUser divider">
        <img
          className="logos"
          src={iconAdminProfil}
          // src={isAdmin ? { iconAdminProfil } : { iconUserProfil }}
          alt="icon admin's profil"
        />
        <p>{el.username}</p>
        <img className="logos" src={iconChevronRightBlue} alt="chevron right" />
      </div>
    </Link>
  );
}
export default UserList;

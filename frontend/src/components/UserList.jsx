/* eslint-disable react/prop-types */
// Import logos
import iconAdminProfil from "../assets/icons/icon-admin-profil-yellow.svg";
import iconUserProfil from "../assets/icons/icon-user-profil-blue.svg";
import iconChevronRightBlue from "../assets/icons/icon-chevron-right-blue.svg";

function UserList({ user }) {
  return (
    <div className="manageUser divider">
      <img
        className="logos"
        src={user.is_admin ? iconAdminProfil : iconUserProfil}
        alt="icon admin's profil"
      />
      <p>{user.username}</p>
      <img className="logos" src={iconChevronRightBlue} alt="chevron right" />
    </div>
  );
}
export default UserList;

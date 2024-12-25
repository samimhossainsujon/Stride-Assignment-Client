import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router-dom";

const UserDropdown = () => {
  const { user, logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-10 rounded-full">
            <img
              src={`${
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              }`}
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex gap-2"
      >
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className="btn btn-primary btn-outline btn-sm"
          >
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;

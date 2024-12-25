import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useGetSingleUser from "../../Hooks/useGetSingleUser";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [singleUserData] = useGetSingleUser();
  const nabList = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="navbar bg-primary text-white max-w-[90%] mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {nabList.map((item, i) => (
              <li key={i}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TechOrbit</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          {nabList.map((item, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "btn-main" : ""
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                <div className="avatar my-2">
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                    <img src={singleUserData?.image} />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-primary rounded-box z-[1] mt-4 w-52 p-2 shadow"
              >
                <Link className="text-center py-3" to={"/dashboard"}>
                  Dashboard
                </Link>

                <button
                  onClick={() => logOut()}
                  className="mb-3 btn btn-secondary btn-sm hover:btn-neutral"
                >
                  Log Out
                </button>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/signup" className="btn-main">
              New Here?
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;

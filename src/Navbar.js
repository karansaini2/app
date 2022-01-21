import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <nav className="navbar">
      <h1>My Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>

        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/create"> Add Blog </Link>
            <button
              className="btn"
              onClick={signUserOut}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                fontSize: "15px",
                cursor: "pointer",
                marginLeft: "15px",
              }}
            >
              {" "}
              <i class="fas fa-power-off"></i>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

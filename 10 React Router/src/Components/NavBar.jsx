import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

function NavBar() {
  function NavDesign({ isActive }) {
    return {
      border: isActive ? "2px solid black" : "none",
      backgroundColor: isActive ? "pink" : "transparent",
    };
  }

  const auth = useAuth();
  return (
    <nav>
      <NavLink to="/" style={NavDesign}>
        HomePage
      </NavLink>
      <NavLink to="aboutus" style={NavDesign}>
        About us
      </NavLink>
      <NavLink to="product" style={NavDesign}>
        Product
      </NavLink>
      <NavLink to="profile" style={NavDesign}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink to="login" style={NavDesign}>
          Login
        </NavLink>
      )}

      {/* {console.log("NavOpened")} */}
    </nav>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Product() {
  return (
    <>
      <Outlet />
      <div>
        <input type="text" placeholder="Enter product" />
      </div>

      <Link to="featured">Featured</Link>
      <Link to="new">New</Link>
    </>
  );
}

export default Product;

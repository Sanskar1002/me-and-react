import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-blue-700 text-center text-white">user:{userid}</div>
  );
}

export default User;

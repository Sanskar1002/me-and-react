import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleLogin = () => {
    auth.login(user);
    navigate("/profile", { replace: true });
  };
  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={handleUser}
        placeholder="enter name"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

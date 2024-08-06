import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import NavBar from "./Components/NavBar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Product from "./Components/Product";
import New from "./Components/New";
import Featured from "./Components/Featured";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Components/Auth";
import Login from "./Components/Login";
import ReqireAuth from "./Components/ReqireAuth";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="product" element={<Product />}>
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route
          path="profile"
          element={
            <ReqireAuth>
              <Profile />
            </ReqireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <h1>Mai nhi ho raha change</h1>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Ordered Confirm</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default OrderSummary;

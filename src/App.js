import logo from "./logo.svg";
import "./App.css";
import TaxCard from "./Card";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const taxResources = localStorage.getItem("taxResources")
    ? JSON.parse(localStorage.getItem("taxResources"))
    : [];

  return (
    <div
      style={{
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5%",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "orangeRed",
        }}
        onClick={() => {
          navigate("/Create");
        }}
      >
        Create
      </Button>
      {taxResources?.map((res) => (
        <TaxCard
          name={res.name}
          rate={res.rate}
          applied_to={res.applied_to}
          applicable_items={res.applicable_items}
        />
      ))}
    </div>
  );
}

export default App;

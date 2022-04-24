import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyForm from "./MyForm";
import More from "./More";

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/More" element={<More />} />
        <Route path="/" element={<MyForm />} />
      </Routes>
    </div>
  );
}

export default App;

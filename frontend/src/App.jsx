import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../pages/Home";
import { ContextProvider } from "./context/Context"; // if you use context
import Account from "./components/Login";

function App() {
  return (
    <ContextProvider>
      <div className='w-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Account />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;

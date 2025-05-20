import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "../pages/Home";
import { ContextProvider } from "./context/Context"; // if you use context
import Account from "./components/Account";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import SuccessStories from "./components/SuccessStories";
import SuccessStoryDetail from "./components/SuccessStoryDetail ";
import Footer from "./components/Footer";

function App() {
  return (
    <ContextProvider>
      <div className='w-full'>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<SuccessStories />} />
          <Route path="/blogs/:id" element={<SuccessStoryDetail />} />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;

// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Update from "./pages/Update";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Show />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

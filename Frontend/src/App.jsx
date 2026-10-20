// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/pages/Create";
import Show from "./components/pages/Show";
import Update from "./components/pages/Update";
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

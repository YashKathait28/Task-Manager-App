// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Update from "./pages/Update";
import CompletedTask from "./components/navbar/TaskStatus/CompletedTask";
import PendingTask from "./components/navbar/TaskStatus/PendingTask";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Show />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/:id" element={<Update />}></Route>
          <Route path="/completed" element={<CompletedTask />}></Route>
          <Route path="/pending" element={<PendingTask />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

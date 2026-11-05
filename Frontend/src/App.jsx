// import React from 'react'
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Update from "./pages/Update";
import CompletedTask from "./components/navbar/TaskStatus/CompletedTask";
import PendingTask from "./components/navbar/TaskStatus/PendingTask";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";

function TaskLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<TaskLayout />}>
              <Route path="/show" element={<Show />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/update/:id" element={<Update />}></Route>
              <Route path="/completed" element={<CompletedTask />}></Route>
              <Route path="/pending" element={<PendingTask />}></Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

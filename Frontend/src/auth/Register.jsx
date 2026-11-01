// import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    const data = { username, email, password };

    if (username.trim() == "" || email.trim() == "" || password.trim() == "") {
      return;
    }

    try {
      const response = await fetch("https://task-manager-app-3hrv.onrender.com/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result.message);
        return;
      }

      if (response.ok) {
        console.log(result);
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.log("Error occur during registering", error);
      return;
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-indigo-100">
      <div className="bg-white border-none rounded-2xl shadow-lg p-5 w-full max-w-md h-auto">
        <form onSubmit={handleForm}>
          <h1 className="text-center text-2xl text-indigo-500 transition-colors duration-200 hover:text-indigo-600 font-semibold mb-3">
            Register User
          </h1>
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold">Username</label>
            <input
              type="text"
              placeholder="Create your username"
              className="w-full rounded-lg px-2 py-2 border outline-none focus:border-indigo-200  focus:ring-1 focus:ring-indigo-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className="text-md font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg px-2 py-2 border  outline-none focus:border-indigo-200  focus:ring-1 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="text-md font-semibold">Password</label>
            <input
              type="password"
              placeholder="Set your password"
              className="w-full rounded-lg px-2 py-2 border outline-none focus:border-indigo-200  focus:ring-1 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 mb-2 w-full border px-2 py-2 text-lg font-semibold rounded-lg outline-none bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer transition-colors duration-200"
          >
            Submit
          </button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <span
              className="hover:text-gray-600 hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

// import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      if (email.trim() == "" || password.trim() == "") {
        return;
      }

      const response = await fetch("https://task-manager-app-3hrv.onrender.com/api/auth/login", {
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
        setEmail("");
        setPassword("");
        navigate("/show");
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-indigo-100">
      <div className="bg-white border-none rounded-2xl shadow-lg p-5 w-full max-w-xs min-h-[350px]">
        <form onSubmit={handleSumbit}>
          <h1 className="text-center text-2xl text-indigo-500 transition-colors duration-200 hover:text-indigo-600 font-semibold mb-3">
            Login User
          </h1>
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold ">Email</label>
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
              placeholder="Enter your password"
              className="w-full rounded-lg px-2 py-2 border outline-none focus:border-indigo-200  focus:ring-1 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 mb-3 w-full border px-2 py-2 text-lg font-semibold rounded-lg outline-none bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer transition-colors duration-200"
          >
            Login
          </button>

          <p
            className="text-center text-sm text-gray-400 gap-2 cursor-pointer hover:text-gray-600 hover:underline"
            onClick={() => navigate("/register")}
          >
            Create a new account
          </p>
        </form>
      </div>
    </div>
  );
}

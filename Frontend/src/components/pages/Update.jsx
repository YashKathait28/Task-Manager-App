// import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateSingleTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/getTask/${id}`,
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
        return;
      }

      if (response.ok) {
        console.log(result);
        setTitle(result.tasks.title);
        setDescription(result.tasks.description);
      }
    } catch (error) {
      console.log("Error occur while creating the task!", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = { title, description };
    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/editTask/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
        return;
      }

      if (response.ok) {
        console.log(result);
        navigate("/");
      }
    } catch (error) {
      console.log("Error occur while creating the task!", error);
    }
  };

  useEffect(() => {
    updateSingleTask();
  }, [id]);

  return (
    <div className="mx-auto mt-15 max-w-lg px-4">
      <form
        onSubmit={handleUpdate}
        className="rounded-xl border border-gray-200 bg-white p-5 shadow-md"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 ">
          Update Task
        </h2>

        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-2 text-md block font-semibold text-gray-700"
          >
            Task Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter your title here..."
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            className="w-full rounded-lg px-2 py-2 border border-gray-300 outline:none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="description"
            className="mb-2 text-md block font-semibold text-gray-700"
          >
            Task Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            id="description"
            placeholder="Enter your description here..."
            rows="4"
            className="border border-gray-200 focus:border-indigo-800 focus:ring-1 focus:ring-indigo-100 w-full rounded-lg px-2 py-2 outline:none "
          />
        </div>

        <button
          type="submit"
          className="w-full mt-5 cursor-pointer text-white hover:bg-indigo-700 rounded-lg bg-indigo-600 transition px-2 py-2 outline-none"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Update;

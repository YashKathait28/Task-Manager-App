import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search_and_Date from "../../filters/Search_and_Date";
import { useLocation } from "react-router-dom";

const CompletedTask = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const location = useLocation();

  const filteredTask = () => {
    const filtered = tasks.filter((task) => {
      const matchTitle =
        !search || task.title.toLowerCase().includes(search.toLowerCase());

      const matchDate = !date || task.createdAt?.slice(0, 10) === date;

      return matchTitle && matchDate && task.completed === true;
    });

    return filtered;
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://task-manager-app-3hrv.onrender.com/api/tasks/deleteTask/${id}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
        return;
      }

      if (response.ok) {
        // console.log(result);
        getData();
      }
    } catch (error) {
      console.log("Task not deleted!", error);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://task-manager-app-3hrv.onrender.com/api/tasks/getTask",
        {
          method: "GET",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
        return;
      }

      if (response.ok) {
        console.log(result);
        setTasks(result.tasks);
      }
    } catch (error) {
      console.log("Error in getting the tasks!", error);
    }
  };

  useEffect(() => {
    getData();
  }, [location]);
  return (
    <>
      <Search_and_Date
        search={search}
        date={date}
        setSearch={setSearch}
        setDate={setDate}
      />
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto p-7 m-2 sm:grid-cols-2 lg:grid-cols-3 ">
        {filteredTask().map((task) => (
          <div
            key={task._id}
            className="text-center border rounded-lg bg-amber-50 shadow-sm p-2 flex flex-col sm:w-60 lg:w-80 md-w-70"
          >
            <div className="relative mb-2">
              <h2 className="text-center text-lg mt-3 font-semibold text-gray-800 break-all pl-14 pr-17">
                {task.title}
              </h2>
            </div>
            <p className="text-sm mb-6 text-gray-600 wrap-break-word">
              {task.description}
            </p>
            <div className="flex justify-center mt-auto mb-3 gap-4 pt-3">
              <button className="cursor-pointer rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700">
                <Link to={`/${task._id}`}>Edit</Link>
              </button>
              <button
                onClick={() => {
                  handleDelete(task._id);
                }}
                className="cursor-pointer rounded bg-red-500 px-4 py-1 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompletedTask;

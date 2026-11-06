import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search_and_Date from "../../filters/Search_and_Date";
// import { useLocation } from "react-router-dom";

const PendingTask = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  // const location = useLocation();

  const filteredTask = () => {
    const filtered = tasks.filter((task) => {
      const matchTitle =
        !search || task.title.toLowerCase().includes(search.toLowerCase());

      const matchDate = !date || task.createdAt?.slice(0, 10) === date;

      return matchTitle && matchDate && task.completed !== true;
    });

    return filtered;
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://task-manager-app-3hrv.onrender.com/api/tasks/deleteTask/${id}`,
        {
          method: "DELETE",
          credentials: "include",
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
      const response = await fetch("https://task-manager-app-3hrv.onrender.com/api/tasks/getTask", {
        method: "GET",
        credentials: "include",
      });

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
  }, []);

  
return (
  <>
    {/* Heading and Filters */}
    <div className="flex w-full flex-col gap-4 px-3 pt-5 mb-2 md:flex-row md:items-center md:justify-between md:px-6">
      <h2 className="text-2xl font-semibold ml-3 md:px-6">
        Pending Tasks
      </h2>

      <Search_and_Date
        search={search}
        date={date}
        setSearch={setSearch}
        setDate={setDate}
      />
    </div>

    {/* Pending Task Cards */}
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 p-3 sm:grid-cols-2 md:p-6 lg:grid-cols-3">
      {filteredTask().length > 0 ? (
        filteredTask().map((task) => (
          <div
            key={task._id}
            className="flex w-full min-w-0 flex-col rounded-lg border bg-amber-50 p-3 text-center shadow-sm"
          >
            <div className="relative mb-2">
              <h2 className="mt-3 break-words px-4 text-center text-lg font-semibold text-gray-800">
                {task.title}
              </h2>
            </div>

            <p className="mb-6 break-words text-sm text-gray-600">
              {task.description}
            </p>

            <div className="mt-auto flex justify-center gap-4 pt-3 pb-2">
              <button className="cursor-pointer rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700">
                <Link to={`/update/${task._id}`}>
                  Edit
                </Link>
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
        ))
      ) : (
        <div className="col-span-full flex min-h-[20vh] w-full items-center justify-center text-center text-lg font-medium">
          <p>No Pending Tasks Found</p>
        </div>
      )}
    </div>
  </>
);

};

export default PendingTask;
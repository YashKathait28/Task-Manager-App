import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://task-manager-app-3hrv.onrender.com/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
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
      console.log("Logout failed", error);
      return;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://task-manager-app-3hrv.onrender.com/api/auth/check-auth",
          {
            credentials: "include",
          },
        );

        const data = await response.json();
        console.log("API Response:", data);
        console.log("Username:", data.user?.username);

        if (response.ok) {
          setUsername(data.user.username);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="relative top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-blue-950 px-3 py-3 shadow-sm md:px-6 md:py-4">
      {/* Logo */}
      <div className="flex min-w-0 items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-semibold font-sans tracking-tight text-transparent">
        <img
          src="/image.png"
          className="h-8 w-8 shrink-0 object-contain md:h-10 md:w-10"
          alt="Logo"
        />
        <h1 className="text-lg md:text-2xl">My Task Manager</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="ml-auto hidden items-center gap-6 md:flex">
        <Link
          to="/show"
          className="text-sm font-medium text-amber-50 transition hover:text-blue-300 hover:underline"
        >
          Dashboard
        </Link>

        <Link
          to="/create"
          className="text-sm font-medium text-amber-50 transition hover:text-blue-300 hover:underline"
        >
          Create Task
        </Link>

        {/* Task Status */}
        <div className="relative">
          <button
            onClick={() => setShowStatus(!showStatus)}
            className="flex cursor-pointer items-center gap-1 text-sm font-medium text-amber-50 hover:text-blue-300"
          >
            Task Status
            <span className="text-[8px] translate-y-0.5">
              {showStatus ? "▲" : "▼"}
            </span>
          </button>

          {showStatus && (
            <div className="absolute left-0 top-full z-50 mt-2 w-36 rounded-lg bg-white shadow-lg">
              <Link
                to="/completed"
                className="block rounded-t-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
                onClick={() => setShowStatus(false)}
              >
                Completed Task
              </Link>

              <Link
                to="/pending"
                className="block rounded-b-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
                onClick={() => setShowStatus(false)}
              >
                Pending Task
              </Link>
            </div>
          )}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="cursor-pointer rounded-xl border bg-purple-700 px-3 py-2 font-medium text-white hover:bg-purple-800"
        >
          Logout
        </button>

        {/* Profile */}
        <div className="flex items-center justify-center rounded-2xl px-3 py-1 border-4 bg-emerald-500 text-lg hover:bg-emerald-600">
          {username || "User"}
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => {
          setMenuOpen(!menuOpen);
          setShowStatus(false);
        }}
        className="ml-3 shrink-0 text-2xl text-white md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-t border-gray-700 bg-blue-950 p-5 shadow-lg md:hidden">
          <Link
            to="/show"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-white hover:text-blue-300 hover:underline"
          >
            Dashboard
          </Link>

          <Link
            to="/create"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-white hover:text-blue-300 hover:underline"
          >
            Create Task
          </Link>

          {/* Mobile Task Status */}
          <button
            onClick={() => setShowStatus(!showStatus)}
            className="text-left text-sm font-medium text-white hover:text-blue-300"
          >
            Task Status {showStatus ? "▲" : "▼"}
          </button>

          {showStatus && (
            <div className="ml-4 flex flex-col gap-3">
              <Link
                to="/completed"
                onClick={() => {
                  setShowStatus(false);
                  setMenuOpen(false);
                }}
                className="text-sm text-white hover:text-blue-300 hover:underline"
              >
                Completed Task
              </Link>

              <Link
                to="/pending"
                onClick={() => {
                  setShowStatus(false);
                  setMenuOpen(false);
                }}
                className="text-sm text-white hover:text-blue-300 hover:underline"
              >
                Pending Task
              </Link>
            </div>
          )}

          {/* Mobile Profile and Logout */}
          <div className="flex items-center justify-between border-t border-gray-700 pt-4">
            <div className="flex items-center justify-center rounded-xl px-3 py-1  border-2 bg-emerald-500 hover:bg-emerald-600 text-lg">
              {username || "User"}
            </div>

            <button
              onClick={handleLogout}
              className="cursor-pointer rounded-lg bg-purple-700 px-4 py-2 font-medium text-white hover:bg-purple-800"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

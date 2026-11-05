import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch(
          "https://task-manager-app-3hrv.onrender.com/api/auth/check-auth",
          {
            credentials: "include",
          },
        );

        setIsLoggedIn(response.ok);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  }, []);

  if (isLoggedIn === null) return <p>Checking authentication...</p>;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

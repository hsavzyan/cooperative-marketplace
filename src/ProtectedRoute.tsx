import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";

// Define the props for the ProtectedRoute component
type ProtectedRouteProps = {
  children: React.ReactNode;
};

// Define the ProtectedRoute component
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Use the useUser hook to get the current user
  const { user } = useUser();

  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();

  // Use the useEffect hook to navigate to the sign in page if the user is not signed in
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  // If the user is signed in, render the children
  // If the user is not signed in, render null
  return user ? <>{children}</> : null;
};

export default ProtectedRoute;

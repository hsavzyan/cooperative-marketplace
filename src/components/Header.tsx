import { Link } from "react-router-dom";
import { useUser } from "../useUser";
import SignOut from "./SignOut";

// Define the Header component
const Header = () => {
  // Use the useUser hook to get the current user
  const { user } = useUser();

  // Render the header
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-6 bg-secondary text-light">
      <h1 className="text-3xl font-semibold mb-4 sm:mb-0">
        Cooperative Marketplace
      </h1>
      <nav className="space-x-4">
        {user ? (
          // If the user is signed in, display their email and the sign out button
          <>
            <span className="text-lg">{user.email}</span>
            <SignOut />
          </>
        ) : (
          // If the user is not signed in, display links to the sign up and sign in pages
          <>
            <Link
              to="/signup"
              className="text-light bg-accent hover:bg-accent-dark px-2 py-1 rounded"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-light bg-accent hover:bg-accent-dark px-2 py-1 rounded"
            >
              Sign In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

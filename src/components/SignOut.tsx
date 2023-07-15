import { signOut } from "firebase/auth";
import { auth } from "../firebase";

// Define the SignOut component
const SignOut = () => {
  // Define the handleSignOut function
  // This function will be called when the user clicks the sign out button
  const handleSignOut = () => {
    // Call the signOut function and use the then method to handle the promise it returns
    signOut(auth)
      .then(() => {
        // The user has been signed out
      })
      .catch((error) => {
        // If there's an error, log it to the console
        console.error("Error signing out: ", error);
      });
  };

  // Render the sign out button
  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
    >
      Sign Out
    </button>
  );
};

export default SignOut;

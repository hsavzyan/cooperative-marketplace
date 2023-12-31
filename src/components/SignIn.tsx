import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

// Define the SignIn component
const SignIn = () => {
  // Define state variables for the email, password, and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Error | null>(null);

  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Define the handleSubmit function
  // This function will be called when the user submits the sign in form
  const handleSubmit = (event: React.FormEvent) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Wrap the await expression with a self-invoking async function
    (async () => {
      try {
        // Try to sign in the user with the provided email and password
        // This function will throw an error if the email or password is incorrect
        await signInWithEmailAndPassword(auth, email, password);

        // If the sign in is successful, navigate to the home page
        navigate("/");
      } catch (error) {
        // If there's an error, catch it and set the error message
        setError(error as Error);
      }
    })().catch((error) => {
      // Catch any errors that are not caught by the try-catch block
      setError(error as Error);
    });
  };

  // Render the sign in form
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="mb-4 text-3xl font-semibold text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border border-secondary rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-accent text-dark"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 border border-secondary rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-accent text-dark"
        />
        <button
          type="submit"
          className="px-4 py-2 text-light bg-accent rounded-md shadow-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-dark"
        >
          Sign In
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error.message}</p>}
    </div>
  );
};

export default SignIn;

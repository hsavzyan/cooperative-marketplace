import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    (async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        setError(error as Error);
      }
    })().catch((error) => {
      setError(error as Error);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen m-0 p-0">
      <h1 className="mb-4 text-3xl font-semibold text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 border border-blue-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error.message}</p>}
    </div>
  );
};

export default SignUp;

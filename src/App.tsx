import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Marketplace } from "./components/Marketplace";
import { Cart } from "./components/Cart";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import ProtectedRoute from "./ProtectedRoute";
import { businesses } from "./data";

// Define a new component that will render the Routes and Cart
const MainContent: React.FC = () => {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Determine whether the Cart component should be displayed
  // The Cart component should not be displayed on the sign up and sign in routes
  const displayCart =
    location.pathname !== "/signup" && location.pathname !== "/signin";

  return (
    <div className="flex flex-col-reverse sm:flex-row bg-primary text-light min-h-screen justify-center">
      <div className="w-full sm:w-2/3 p-4">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Marketplace businesses={businesses} />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      {displayCart && (
        <div className="w-full sm:w-1/3 p-4 border-b sm:border-b-0 sm:border-l border-secondary">
          <Cart />
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <MainContent />
    </Router>
  );
};

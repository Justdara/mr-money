import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="login" />}
            ></Route>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            ></Route>
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            ></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

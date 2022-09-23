import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import "./App.scss";
import ProtectedRoute from "./components/ProtectedRoute";
import RoomDetails from "./pages/RoomDetails/RoomDetails";
import Payment from "./pages/Payment/Payment";
import Reservations from "./pages/Reservations/Reservations";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/roomDetails/:id"
            element={
              <ProtectedRoute>
                <RoomDetails />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/payment/:id"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/yourReservation/:id"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

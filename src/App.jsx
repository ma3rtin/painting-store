import Home from "./layout/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Cart from "./layout/Cart";
import NotFound from "./layout/NotFound";
import PaintingDetail from "./layout/PaintingDetail";
import Admin from "./layout/Admin";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./layout/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paintings/:paintingId" element={<PaintingDetail />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

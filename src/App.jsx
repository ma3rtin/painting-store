import Home from "./layout/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./layout/Cart";
import NotFound from "./layout/NotFound";
import PaintingDetail from "./layout/PaintingDetail";
import Admin from "./layout/Admin";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./layout/Login";
import AddPainting from "./layout/AddPainting";
import EditPainting from "./layout/EditPainting";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route
            path="/paintings/add"
            element={
              <ProtectedRoute>
                <AddPainting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paintings/edit/:paintingId"
            element={
              <ProtectedRoute>
                <EditPainting />
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

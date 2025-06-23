import { useContext, useState } from "react";
import Footer from "../components/static/Footer";
import Header from "../components/static/Header";
import { CartContext } from "../context/CartContext";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "../styles/AdminLayout.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { ToastContainer } from "react-toastify";

function Admin() {
  const { paintings, handleDeletePainting } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const navigateToEditPage = (paintingId) => {
    navigate(`/paintings/edit/${paintingId}`);
  };

  const handleDeleteConfirm = (paintingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This painting will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletePainting(paintingId);
      }
    });
  };

  const filteredPaintings = paintings.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <ToastContainer />
      <section className="admin-section">
        <h1 className="admin-title">Admin Panel</h1>

        <div className="admin-search-wrapper">
          <input
            type="text"
            className="admin-search-input"
            placeholder="Search by title or artist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPaintings.map((painting) => (
                <tr key={painting.id}>
                  <td>{painting.id}</td>
                  <td>{painting.title}</td>
                  <td>{painting.artist}</td>
                  <td>${painting.price}</td>
                  <td>
                    <div className="admin-actions">
                      <button
                        className="action-btn delete-btn"
                        onClick={() => handleDeleteConfirm(painting.id)}
                      >
                        <FaTrashAlt />
                      </button>
                      <button
                        className="action-btn edit-btn"
                        onClick={() => navigateToEditPage(painting.id)}
                      >
                        <FaEdit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPaintings.length === 0 && (
            <p className="admin-empty-message">No paintings match your search.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Admin;

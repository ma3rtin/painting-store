import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Painting from "./Painting";
import { useNavigate } from "react-router-dom";

function PaintingList() {
  const {
  paginatedPaintings,
  setSearch,
  filteredPaintings,
  handlePaginationChange,
  pagination
} = useContext(CartContext);

const totalPages = Math.max(1, Math.ceil(filteredPaintings.length / pagination.limit));

  return (
    <div className="painting-list-wrapper">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search paintings..."
          className="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
            setPagination((prev) => ({ ...prev, page: 1 }));
          }}
        />
        <p className="result-count">
          {filteredPaintings.length} paintings found
        </p>
      </div>

      <div className="gallery-grid">
        {paginatedPaintings.map((painting) => (
          <Painting
            painting={painting}
            key={painting.id}
            onClick={() => navigate(`/paintings/${painting.id}`)}
          />
        ))}
      </div>

      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => handlePaginationChange(pagination.page - 1)}
          disabled={pagination.page === 1}
        >
          &#8592; Previous
        </button>

        <span className="pagination-info">
          Page {pagination.page} of {totalPages}
        </span>

        <button
          className="pagination-button"
          onClick={() => handlePaginationChange(pagination.page + 1)}
          disabled={pagination.page === totalPages}
        >
          Next &#8594;
        </button>
      </div>
    </div>
  );
}

export default PaintingList;

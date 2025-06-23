import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Painting from "./Painting";
import { useNavigate } from "react-router-dom";

function PaintingList() {
  const { paintings, setSearch, filteredPaintings } = useContext(CartContext);
  const navigate = useNavigate();

  if (!paintings || paintings.length === 0) {
    return <div className="empty-message">No paintings available</div>;
  }

  return (
    <div className="painting-list-wrapper">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search paintings..."
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="result-count">{filteredPaintings.length} paintings found</p>
      </div>

      <div className="gallery-grid">
        {filteredPaintings.map((painting) => (
          <Painting
            painting={painting}
            key={painting.id}
            onClick={() => navigate(`/paintings/${painting.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default PaintingList;

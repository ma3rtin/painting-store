import { useContext } from "react";
import Painting from "./Painting";
import "../styles/stylePainting.css";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";

function PaintingList() {
  const { paintings } = useContext(CartContext);
  if (!paintings || paintings.length === 0) {
    return <div>No paintings available</div>;
  }
  function handleClick(paintingId) {
    Navigate(`/paintings/${paintingId}`);
  }
  return (
    <div className="painting-list">
      {paintings.map((painting) => (
          <Painting painting={painting} key={painting.id} onClick={() => handleClick}/>
      ))}
    </div>
  );
}

export default PaintingList;

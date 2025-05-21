import { useContext } from "react";
import Painting from "./Painting";
import "./stylePainting.css";
import { CartContext } from "../context/CartContext";

function PaintingList() {
  const { paintings } = useContext(CartContext);
  if (!paintings || paintings.length === 0) {
    return <div>No paintings available</div>;
  }

  console.log(paintings);
  return (
    <div className="painting-list">
      {paintings.map((painting) => (
        <Painting painting={painting} key={painting.id} />
      ))}
    </div>
  );
}

export default PaintingList;

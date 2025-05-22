import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Details from "../components/Details";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import "../styles/styleDetails.css";

function PaintingDetail() {
  const { paintingId } = useParams();
  const { paintings, handleAddToCart } = useContext(CartContext);
  const painting = paintings.find((p) => p.id === parseInt(paintingId));
  if (!painting) {
    return <div>Painting not found</div>;
  }
  return (
    <div>
      <Header />
      <Details painting={painting} handleAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default PaintingDetail;

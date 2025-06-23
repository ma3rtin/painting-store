import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Details from "../components/Details";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import "../styles/DetailsLayout.css";
import { ToastContainer } from "react-toastify";

function PaintingDetail() {
  const { paintingId } = useParams();
  const { paintings, handleAddToCart } = useContext(CartContext);
  const painting = paintings.find((p) => p.id == paintingId);
  return (
    <div>
      <Header />
      {painting ? (
        <>
          <Details painting={painting} handleAddToCart={handleAddToCart} />
          <ToastContainer />
        </>
      ) : (
        <h1>Painting not found</h1>
      )}
      <Footer />
    </div>
  );
}

export default PaintingDetail;

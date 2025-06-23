import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PaintingForm from "../components/PaintingForm";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";

function EditPainting() {
  const { paintingId } = useParams();
  const { paintings, handleUpdatePainting } = useContext(CartContext);

  const painting = paintings.find((p) => p.id == paintingId);

  return (
    <>
      <Header />
      {painting ? (
        <PaintingForm painting={painting} onSubmit={handleUpdatePainting} />
      ) : (
        <h1>Painting not found</h1>
      )}
      <Footer />
    </>
  );
}

export default EditPainting;

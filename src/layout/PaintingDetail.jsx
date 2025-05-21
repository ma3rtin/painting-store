import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Details } from "../components/Details";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";

function PaintingDetail() {
  const { paintingId } = useParams();
  const { paintings } = useContext(CartContext);
  const painting = paintings.find((p) => p.id === parseInt(paintingId));
  if (!painting) {
    return <div>Painting not found</div>;
  }
  return (
    <div>
      <Header />
      <Details painting={painting} />
      <Footer />
    </div>
  );
}

export default PaintingDetail;

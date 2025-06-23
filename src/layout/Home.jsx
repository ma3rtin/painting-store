import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import PaintingList from "../components/PaintingList";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import loadingGif from "../assets/loading.gif";
import { ToastContainer } from "react-toastify";
import '../styles/HomeLayout.css';
function Home() {
  const { loading, error } = useContext(CartContext);

  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <h1 className="hero-title">Discover Masterpieces</h1>
          <p className="hero-subtitle">
            Explore a curated collection of timeless paintings by renowned artists.
          </p>
          <a href="#gallery" className="hero-btn">Browse Collection</a>
        </section>

        {loading ? (
          <div className="loading-container">
            <img src={loadingGif} alt="Loading..." />
          </div>
        ) : error ? (
          <div className="error-message">Error: {error.message}</div>
        ) : (
          <section id="gallery">
            <ToastContainer />
            <PaintingList />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Home;

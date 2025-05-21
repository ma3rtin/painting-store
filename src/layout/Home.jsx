import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import PaintingList from "../components/PaintingList";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const { loading, error } = useContext(CartContext);

  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor
          ipsam magni ratione delectus, laborum sequi voluptatem obcaecati
          tempora rem placeat nihil maxime vel cum aliquam, ex expedita
          dignissimos quis. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Mollitia atque quos voluptatem libero aperiam commodi eligendi
          earum, asperiores quis corporis praesentium nemo ut, omnis placeat.
          Quod quae consequatur vero molestiae?
        </p>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <PaintingList />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Home;

import { createContext, useState, useEffect } from "react";
import { fetchPaintings } from "../api/ApiHarvardArtMuseums";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    fetchPaintings()
      .then((data) => {
        setLoading(false);
        if (data) {
          setPaintings(data);
        } else {
          setError("Failed to fetch data");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to fetch data");
      });
  }, []);

  const handleAddToCart = (painting) => {
    if(!cart.some((item) => item.id === painting.id)) {
      setCart([...cart, painting]);
    }else{
        alert("Item already in cart");
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const handleClearCart = () => {
    setCart([]);
  };
  const handleCalculateTotal = () => {
    const total = cart.map((acc, item) => acc + item.price, 0);
    setTotal(total);
  };
  useEffect(() => {
    handleCalculateTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        paintings,
        total,
        loading,
        error,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

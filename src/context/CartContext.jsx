import { createContext, useState, useEffect } from "react";
import { fetchPaintings, createPainting, updatePainting } from "../api/MockApi";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paintings, setPaintings] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredPaintings = paintings.filter((painting) => {
    return painting?.title.toLowerCase().includes(search.toLowerCase());
  });


  const handleAddToCart = (painting) => {
    if (!cart.some((item) => item.id === painting.id)) {
      setCart([...cart, painting]);
      toast.success(` "${painting.title}" added to cart.`, {
        position: "top-right",
        autoClose: 2500,
      });
    } else {
      toast.warning(`"${painting.title}" is already in the cart.`, {
        position: "top-right",
        autoClose: 2500,
      });
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
  const handleRemoveAllFromCart = () => {
    setCart([]);
    toast.success("All items removed from cart.", {
      position: "top-right",
      autoClose: 2500,
    });
  };

   const handleUpdatePainting = async (data) => {
    const res = await updatePainting(data.id, data);
    if (res.ok) toast.success("Painting updated successfully!");
    else toast.error("Error updating painting.");
  };

  const handleCreatePainting = async (painting) => {
    try {
          const res = await createPainting(painting);
          if (res.ok) toast.success("Painting added successfully!");
          else toast.error("Error adding painting.");
        } catch (err) {
          toast.error("Network error");
        }
  }

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
        handleRemoveAllFromCart,
        filteredPaintings,
        handleCalculateTotal,
        setSearch,
        handleCreatePainting,
        handleUpdatePainting
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
